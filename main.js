import { InstanceBase, InstanceStatus, runEntrypoint, TCPHelper, UDPHelper } from '@companion-module/base'
import { ConfigFields } from './config.js'
import { getActionDefinitions } from './actions.js'
import { getPresetDefinitions } from './presets.js'
import { getVariablesDefinitions } from './variables.js'

class PBPInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
		//Alejandro's Mod
		this.commandQueue = [];
		this.waitingForReply = false;
		this.commandTimeout = null
		this.commandTimeoutDuration = 1000
	}

	async init(config) {
		this.config = config
		this.updateStatus(InstanceStatus.Disconnected)
		this.setActionDefinitions(getActionDefinitions(this))
		this.setPresetDefinitions(getPresetDefinitions(this))
		this.setVariableDefinitions(getVariablesDefinitions(this))
		this.setVariableValues({
			previewCurrentName: "preview name",
			previewCurrentNumber: "preview number",
			programCurrentName: "program name",
			programCurrentNumber: "program number",
			programTRT: "program trt",
		})
		await this.configUpdated(config)
	}

	// When module gets deleted
	async destroy() {
		if (this.socket) {
			this.socket.destroy()
		} else if (this.udp) {
			this.udp.destroy()
		} else {
			this.updateStatus(InstanceStatus.Disconnected)
		}
	}

	async configUpdated(config) {
		if (this.udp) {
			this.udp.destroy()
			delete this.udp
		}

		if (this.socket) {
			this.socket.destroy()
			delete this.socket
		}

		this.config = config

		if (this.config.prot == 'tcp') {
			this.init_tcp()
		}

		if (this.config.prot == 'udp') {
			this.init_udp()
		}
	}

	// Return config fields for web config
	getConfigFields() {
		return ConfigFields
	}

	init_udp() {
		if (this.udp) {
			this.udp.destroy()
			delete this.udp
		}

		this.updateStatus(InstanceStatus.Connecting)

		if (this.config.host) {
			this.udp = new UDPHelper(this.config.host, 7000)

			this.udp.on('error', (err) => {
				this.updateStatus(InstanceStatus.ConnectionFailure, err.message)
				this.log('error', 'Network error: ' + err.message)
			})

			// If we get data, thing should be good
			this.udp.on('listening', () => {
				console.log('UDP listening')
				this.updateStatus(InstanceStatus.Ok)
			})

			this.udp.on('status_change', (status, message) => {
				console.log('UDP status_change', status, message)
				this.updateStatus(status, message)
			})
		} else {
			this.updateStatus(InstanceStatus.BadConfig)
		}
	}

	init_tcp() {
		if (this.socket) {
			this.socket.destroy()
			delete this.socket
		}

		this.updateStatus(InstanceStatus.Connecting)

		if (this.config.host) {
			this.socket = new TCPHelper(this.config.host, 4647)

			this.socket.on('status_change', (status, message) => {
				this.updateStatus(status, message)
				console.log('TCP status_change', status, message)
			})

			//Alejandro's Mod
			this.socket.on('data', (data) => {
				const msg = data.toString().trim()
				this.log('debug', `Received: ${msg}`)
			
				clearTimeout(this.commandTimeout)
			
				const current = this.commandQueue.shift()
				this.log('debug', `Dequeued: ${JSON.stringify(current)}`)
			
				try {
					if (typeof current?.callback === 'function') {
						current.callback(msg)
					}
				} catch (err) {
					this.log('error', `Callback error: ${err.message}`)
				}
			
				this.waitingForReply = false
				this.processNextCommand()
			})
			

			this.socket.on('error', (err) => {
				this.updateStatus(InstanceStatus.ConnectionFailure, err.message)
				this.log('error', 'Network error: ' + err.message)
			})
		} else {
			this.updateStatus(InstanceStatus.BadConfig)
		}
	}

	send(input) {
		// console.log('>>>>>>>>>>>>>', command, '<<<<<<<<<<<<<')
		//Alejandro's Mod
		let command, callback = null, expectsResponse = false

		if (typeof input === 'string') {
			command = input
		} else if (typeof input === 'object' && input.command) {
			({ command, callback = null, expectsResponse = false } = input)
		} else {
			this.log('error', 'Invalid command input for send()')
			return
		}

		if (this.config.prot == 'tcp') {
			if (this.socket !== undefined && this.socket.isConnected) {
				//Alejandro's Mod
				this.commandQueue.push({ command, callback, expectsResponse })
				this.log('debug', `queued: ${command}, expectsResponse: ${expectsResponse}`)
				this.processNextCommand()
			} else {
				this.log('error', 'TCP Socket not connected')
			}
		} else if (this.config.prot == 'udp') {
			if (this.udp !== undefined) {
				this.udp.send(command)
			} else {
				this.log('error', 'UDP Socket not connected')
			}
		}
	}

	// Alejandro's Mod
	// processNextCommand method
	processNextCommand() {
		this.log('debug', `waiting for reply: ${this.waitingForReply}, commandQueue.length: ${this.commandQueue.length}`)
		if (this.waitingForReply || this.commandQueue.length === 0) return

		const { command, callback, expectsResponse } = this.commandQueue[0]

		if (this.config.prot === 'tcp' && this.socket?.isConnected) {
			this.socket.send(command + '\r')
			this.log('debug', `sent: ${command}, expectsResponse: ${expectsResponse}`)

			if (expectsResponse) {
				this.waitingForReply = true

				clearTimeout(this.commandTimeout)
				this.commandTimeout = setTimeout(() => {
					this.log('warn', `Timeout: no response for "${command}"`)
					this.waitingForReply = false
					this.commandQueue.shift()
					this.processNextCommand()
				}, this.commandTimeoutDuration)
			} else {
				this.commandQueue.shift()
				this.waitingForReply = false
				setImmediate(() => this.processNextCommand())
			}
		} else {
			this.log('error', 'Socket not ready')
			this.commandQueue.shift()
			this.waitingForReply = false
			setImmediate(() => this.processNextCommand())
		}
	}

	
	
	
}

runEntrypoint(PBPInstance, [])
