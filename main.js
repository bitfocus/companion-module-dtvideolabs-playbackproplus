import { InstanceBase, InstanceStatus, runEntrypoint, TCPHelper, UDPHelper } from '@companion-module/base'
import { ConfigFields } from './config.js'
import { getActionDefinitions } from './actions.js'
import { getPresetDefinitions } from './presets.js'

class PBPInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}

	async init(config) {
		this.config = config
		this.updateStatus(InstanceStatus.Disconnected)
		this.setActionDefinitions(getActionDefinitions(this))
		this.setPresetDefinitions(getPresetDefinitions(this))
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

			this.socket.on('error', (err) => {
				this.updateStatus(InstanceStatus.ConnectionFailure, err.message)
				this.log('error', 'Network error: ' + err.message)
			})
		} else {
			this.updateStatus(InstanceStatus.BadConfig)
		}
	}

	send(data) {
		console.log('I should be sending:', data, this.config.prot)
		if (this.config.prot == 'tcp') {
			if (this.socket !== undefined && this.socket.isConnected) {
				this.socket.send(data)
			} else {
				this.log('error', 'TCP Socket not connected')
			}
		} else if (this.config.prot == 'udp') {
			if (this.udp !== undefined) {
				this.udp.send(data)
			} else {
				this.log('error', 'UDP Socket not connected')
			}
		}
	}
}

runEntrypoint(PBPInstance, [])
