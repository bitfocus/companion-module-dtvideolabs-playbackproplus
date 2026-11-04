const { test } = require('node:test')
const assert = require('node:assert/strict')
const { fork } = require('node:child_process')
const { createServer } = require('node:net')
const { createSocket } = require('node:dgram')
const { once } = require('node:events')
const path = require('node:path')
const fs = require('node:fs')

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
async function until(check) {
	for (let i = 0; i < 100; i++) {
		if (check()) return
		await delay(25)
	}
	assert.fail('Timed out waiting for module event')
}

test(
	'PlaybackPro commands, transport switching, status and destroy over real IPC and loopback',
	{ timeout: 20000 },
	async (t) => {
		const dir = process.env.PROBE_MODULE || path.resolve(__dirname, '..')
		const manifestPath = path.join(dir, 'companion/manifest.json')
		const manifest = JSON.parse(fs.readFileSync(manifestPath))
		const tcp = createServer()
		const peers = new Set()
		let bytes = ''
		tcp.on('connection', (socket) => {
			peers.add(socket)
			socket.on('data', (data) => {
				bytes += data.toString()
			})
			socket.on('close', () => peers.delete(socket))
		})
		t.after(() => {
			for (const socket of peers) socket.destroy()
			tcp.close()
		})
		tcp.listen(4647, '127.0.0.1')
		await once(tcp, 'listening')
		const udp = createSocket('udp4')
		const datagrams = []
		udp.on('message', (data) => datagrams.push(data.toString()))
		t.after(() => udp.close())
		udp.bind(7000, '127.0.0.1')
		await once(udp, 'listening')
		const child = fork(path.resolve(path.dirname(manifestPath), manifest.runtime.entrypoint), [], {
			execPath: process.env.PROBE_NODE || process.execPath,
			execArgv: process.env.PROBE_PERMISSIONS ? ['--permission', '--allow-net', `--allow-fs-read=${dir}`] : [],
			env: {
				...process.env,
				MODULE_MANIFEST: manifestPath,
				CONNECTION_ID: 'protocol-test',
				VERIFICATION_TOKEN: 'test',
			},
			stdio: ['ignore', 'pipe', 'pipe', 'ipc'],
		})
		t.after(() => child.kill())
		let stderr = ''
		child.stderr.on('data', (data) => {
			stderr += data
		})
		const calls = []
		const pending = new Map()
		let counter = 0
		child.on('message', (message) => {
			if (message.direction === 'response') {
				const cb = pending.get(message.callbackId)
				pending.delete(message.callbackId)
				if (cb)
					message.success ? cb.resolve(JSON.parse(message.payload || 'null')) : cb.reject(new Error(message.payload))
			} else {
				calls.push({ name: message.name, payload: JSON.parse(message.payload || 'null') })
				if (message.callbackId)
					child.send({ direction: 'response', callbackId: message.callbackId, success: true, payload: '{}' })
			}
		})
		const call = (name, payload) =>
			new Promise((resolve, reject) => {
				const callbackId = String(++counter)
				pending.set(callbackId, { resolve, reject })
				child.send({ direction: 'call', name, payload: JSON.stringify(payload), callbackId })
			})
		await until(() => calls.some((c) => c.name === 'register'))
		const config = { host: '127.0.0.1', prot: 'tcp' }
		await call('init', { label: 'pbp', isFirstInit: false, config, lastUpgradeIndex: -1, actions: {}, feedbacks: {} })
		await until(() => peers.size === 1 && calls.some((c) => c.name === 'set-status' && c.payload.status === 'ok'))
		const definitions = calls.find((c) => c.name === 'setActionDefinitions').payload.actions
		const expected = {
			take: 'TA',
			play: 'PL',
			pause: 'OP',
			pausePgm: 'PA',
			resumePgm: 'PL',
			kill: 'KL',
			link: 'IT',
			freeze: 'FT',
			loop: 'LT',
			loopTempEnable: 'SL',
			loopTempDisable: 'EL',
			previous: 'PR',
			next: 'NX',
			last10: '10',
			last20: '20',
			last30: '30',
			pgmFR: 'OR',
			pgmFF: 'OF',
			pgmStepBack: 'O-',
			pgmStepFwd: 'O+',
			pgmGotoIn: 'OI',
			pgmGotoOut: 'OO',
			markIn: 'ES',
			markOut: 'EE',
			pvwGotoIn: 'EI',
			pvwGotoOut: 'EO',
			pvwPause: 'EP',
			pvwFR: 'ER',
			pvwFF: 'EF',
			pvwStepRev: 'E-',
			pvwStepFwd: 'E+',
			loadClip: 'GO42',
			loadAndTakeClip: 'GT42',
			clearPreviewClip: 'CL',
			decreaseFadeOut: 'K-',
			increaseFadeOut: 'K+',
			decreaseLinkTempDuration: 'I-',
			increaseLinkTempDuration: 'I+',
			decreaseLoopTempDuration: 'L-',
			increaseLoopTempDuration: 'L+',
			decreaseFadeOnTake: 'F-',
			increaseFadeOnTake: 'F+',
			decreaseTakeDuration: 'T-',
			increaseTakeDuration: 'T+',
			saveShow: 'SA',
		}
		assert.deepEqual(definitions.map((d) => d.id).sort(), Object.keys(expected).sort())
		assert.deepEqual(
			definitions.filter((d) => d.options.length).map((d) => [d.id, d.options[0].id, d.options[0].type]),
			[
				['loadClip', 'clip', 'number'],
				['loadAndTakeClip', 'clip', 'number'],
			],
		)
		const execute = (actionId) =>
			call('executeAction', {
				action: {
					id: actionId,
					actionId,
					controlId: '1/0/0',
					options: { clip: 42 },
					disabled: false,
					upgradeIndex: -1,
				},
			})
		for (const id of Object.keys(expected)) await execute(id)
		await until(() => bytes.length >= Object.values(expected).join('').length)
		assert.equal(bytes, Object.values(expected).join(''))
		// The stable implementation has no response handler, polling or feedbacks.
		for (const socket of peers) socket.write('PLAYING\r\n')
		await delay(100)
		assert.equal(calls.filter((c) => c.name === 'setFeedbackDefinitions').length, 0)
		assert.equal(bytes, Object.values(expected).join(''))
		await call('updateConfigAndLabel', { label: 'pbp', config: { ...config, prot: 'udp' } })
		await until(() => peers.size === 0)
		await execute('loadClip')
		await execute('take')
		await until(() => datagrams.length === 2)
		assert.deepEqual(datagrams, ['GO42', 'TA'])
		await call('updateConfigAndLabel', { label: 'pbp', config })
		await until(() => peers.size === 1)
		await execute('kill')
		await until(() => bytes.endsWith('SAKL'))
		await call('destroy', {})
		await until(() => peers.size === 0)
		assert.doesNotMatch(stderr, /ERR_ACCESS_DENIED|uncaught|unhandled/i)
	},
)
