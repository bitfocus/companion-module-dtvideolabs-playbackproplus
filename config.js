import { Regex } from '@companion-module/base'

export const ConfigFields = [
	{
		type: 'textinput',
		id: 'host',
		label: 'Target IP',
		width: 6,
		regex: Regex.IP,
	},
	{
		type: 'dropdown',
		id: 'prot',
		label: 'Connect with TCP / UDP',
		default: 'tcp',
		choices: [
			{ id: 'tcp', label: 'TCP' },
			{ id: 'udp', label: 'UDP' },
		],
	},
]
