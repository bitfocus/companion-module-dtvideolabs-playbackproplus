export function getActionDefinitions(self) {
	return {
		take: {
			name: 'Take',
			options: [],
			callback: async () => {
				self.send('TA')
			},
		},
		play: {
			name: 'Play from current location',
			options: [],
			callback: async () => {
				self.send('PL')
			},
		},
		pause: {
			name: 'Pause Resume',
			options: [],
			callback: async () => {
				self.send('OP')
			},
		},
		kill: {
			name: 'Kill',
			options: [],
			callback: async () => {
				self.send('KL')
			},
		},
		link: {
			name: 'Link temp',
			options: [],
			callback: async () => {
				self.send('IT')
			},
		},
		freeze: {
			name: 'Freeze temp',
			options: [],
			callback: async () => {
				self.send('FT')
			},
		},
		loop: {
			name: 'Loop temp',
			options: [],
			callback: async () => {
				self.send('LT')
			},
		},
		previous: {
			name: 'Previous Clip',
			options: [],
			callback: async () => {
				self.send('PR')
			},
		},
		next: {
			name: 'Next Clip',
			options: [],
			callback: async () => {
				self.send('NX')
			},
		},
		last10: {
			name: 'Goto 10',
			options: [],
			callback: async () => {
				self.send('10')
			},
		},
		last20: {
			name: 'Goto 20',
			options: [],
			callback: async () => {
				self.send('20')
			},
		},
		last30: {
			name: 'Goto 30',
			options: [],
			callback: async () => {
				self.send('30')
			},
		},
		pgmFR: {
			name: 'Fast Reverse Program',
			options: [],
			callback: async () => {
				self.send('OR')
			},
		},
		pgmFF: {
			name: 'Fast Forward Program',
			options: [],
			callback: async () => {
				self.send('OF')
			},
		},
		pgmGotoIn: {
			name: 'Goto In Program',
			options: [],
			callback: async () => {
				self.send('OI')
			},
		},
		pgmGotoOut: {
			name: 'Goto Out Program',
			options: [],
			callback: async () => {
				self.send('OO')
			},
		},
		markIn: {
			name: 'Mark In PVW',
			options: [],
			callback: async () => {
				self.send('ES')
			},
		},
		markOut: {
			name: 'Mark Out PVW',
			options: [],
			callback: async () => {
				self.send('EE')
			},
		},
		pvwGotoIn: {
			name: 'Goto In PVW',
			options: [],
			callback: async () => {
				self.send('EI')
			},
		},
		pvwGotoOut: {
			name: 'Goto Out PVW',
			options: [],
			callback: async () => {
				self.send('EO')
			},
		},
		pvwPause: {
			name: 'Play/Pause PVW',
			options: [],
			callback: async () => {
				self.send('EP')
			},
		},
		pvwFR: {
			name: 'Fast Rewind PVW',
			options: [],
			callback: async () => {
				self.send('ER')
			},
		},
		pvwFF: {
			name: 'Fast Forward PVW',
			options: [],
			callback: async () => {
				self.send('EF')
			},
		},
		pvwStepRev: {
			name: 'Step Backward PVW',
			options: [],
			callback: async () => {
				self.send('E-')
			},
		},
		pvwStepFwd: {
			name: 'Step Forward PVW',
			options: [],
			callback: async () => {
				self.send('E+')
			},
		},
		loadClip: {
			name: 'Load clip (id) into Preview',
			options: [
				{
					type: 'number',
					label: 'clip ID',
					id: 'clip',
				},
			],
			callback: async (event) => {
				self.send('GO' + parseInt(event.options.clip, 10))
			},
		},
		loadAndTakeClip: {
			name: 'Load clip (id) and Take',
			options: [
				{
					type: 'number',
					label: 'Clip ID',
					id: 'clip',
				},
			],
			callback: async (event) => {
				self.send('GT' + parseInt(event.options.clip, 10))
			},
		},
	}
}
