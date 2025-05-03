export function getActionDefinitions(self) {
	return {
		take: {
			name: 'Take clip to Program',
			options: [],
			callback: async () => {
				self.send('TA')
			},
		},
		play: {
			name: 'Play from current location (Program)',
			options: [],
			callback: async () => {
				self.send('PL')
			},
		},
		pause: {
			name: 'Pause/Resume (Program)',
			options: [],
			callback: async () => {
				self.send('OP')
			},
		},
		pausePgm: {
			name: 'Pause playback (Program)',
			options: [],
			callback: async () => {
				self.send('PA')
			},
		},
		resumePgm: {
			name: 'Resume playback from current location (Program)',
			options: [],
			callback: async () => {
				self.send('PL')
			},
		},
		kill: {
			name: 'Stop Program playback (Kill)',
			options: [],
			callback: async () => {
				self.send('KL')
			},
		},
		link: {
			name: 'Link Temp (Toggle)',
			options: [],
			callback: async () => {
				self.send('IT')
			},
		},
		freeze: {
			name: 'Freeze Temp (Toggle)',
			options: [],
			callback: async () => {
				self.send('FT')
			},
		},
		loop: {
			name: 'Loop Temp (Toggle)',
			options: [],
			callback: async () => {
				self.send('LT')
			},
		},
		loopTempEnable: {
			name: 'Loop Temp (Enable)',
			options: [],
			callback: async () => {
				self.send('SL')
			},
		},
		loopTempDisable: {
			name: 'Loop Temp (Disable)',
			options: [],
			callback: async () => {
				self.send('EL')
			},
		},
		previous: {
			name: 'Previous Clip (Preview)',
			options: [],
			callback: async () => {
				self.send('PR')
			},
		},
		next: {
			name: 'Next Clip (Preview)',
			options: [],
			callback: async () => {
				self.send('NX')
			},
		},
		last10: {
			name: 'Goto last 10 seconds',
			options: [],
			callback: async () => {
				self.send('10')
			},
		},
		last20: {
			name: 'Goto last 20 seconds',
			options: [],
			callback: async () => {
				self.send('20')
			},
		},
		last30: {
			name: 'Goto last 30 seconds',
			options: [],
			callback: async () => {
				self.send('30')
			},
		},
		pgmFR: {
			name: 'Fast Reverse (Program)',
			options: [],
			callback: async () => {
				self.send('OR')
			},
		},
		pgmFF: {
			name: 'Fast Forward (Program)',
			options: [],
			callback: async () => {
				self.send('OF')
			},
		},
		pgmStepBack: {
			name: 'Step Backward (Program)',
			options: [],
			callback: async () => {
				self.send('O-')
			},
		},
		pgmStepFwd: {
			name: 'Step Forward (Program)',
			options: [],
			callback: async () => {
				self.send('O+')
			},
		},
		pgmGotoIn: {
			// has no effect??
			name: 'Goto In (Program)',
			options: [],
			callback: async () => {
				self.send('OI')
			},
		},
		pgmGotoOut: {
			// has no effect??
			name: 'Goto Out (Program)',
			options: [],
			callback: async () => {
				self.send('OO')
			},
		},
		markIn: {
			name: 'Mark In (Preview)',
			options: [],
			callback: async () => {
				self.send('ES')
			},
		},
		markOut: {
			name: 'Mark Out (Preview)',
			options: [],
			callback: async () => {
				self.send('EE')
			},
		},
		pvwGotoIn: {
			// has no effect??
			name: 'Goto In (Preview)',
			options: [],
			callback: async () => {
				self.send('EI')
			},
		},
		pvwGotoOut: {
			// has no effect??
			name: 'Goto Out (Preview)',
			options: [],
			callback: async () => {
				self.send('EO')
			},
		},
		pvwPause: {
			name: 'Play/Pause (Preview)',
			options: [],
			callback: async () => {
				self.send('EP')
			},
		},
		pvwFR: {
			name: 'Fast Reverse (Preview)',
			options: [],
			callback: async () => {
				self.send('ER')
			},
		},
		pvwFF: {
			name: 'Fast Forward (Preview)',
			options: [],
			callback: async () => {
				self.send('EF')
			},
		},
		pvwStepRev: {
			name: 'Step Backward (Preview)',
			options: [],
			callback: async () => {
				self.send('E-')
			},
		},
		pvwStepFwd: {
			name: 'Step Forward (Preview)',
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
			name: 'Load clip (id) and Take to Program',
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
		clearPreviewClip: {
			name: 'Clear Preview clip',
			options: [],
			callback: async () => {
				self.send('CL')
			},
		},
		decreaseFadeOut: {
			name: 'Decrease End All fade out duration',
			options: [],
			callback: async () => {
				self.send('K-')
			},
		},
		increaseFadeOut: {
			name: 'Increase End All fade out duration',
			options: [],
			callback: async () => {
				self.send('K+')
			},
		},
		decreaseLinkTempDuration: {
			name: 'Decrease Link Temp duration',
			options: [],
			callback: async () => {
				self.send('I-')
			},
		},
		increaseLinkTempDuration: {
			name: 'Increase Link Temp duration',
			options: [],
			callback: async () => {
				self.send('I+')
			},
		},
		decreaseLoopTempDuration: {
			name: 'Decrease Loop Temp duration',
			options: [],
			callback: async () => {
				self.send('L-')
			},
		},
		increaseLoopTempDuration: {
			name: 'Increase Loop Temp duration',
			options: [],
			callback: async () => {
				self.send('L+')
			},
		},
		decreaseFadeOnTake: {
			name: 'Decrease Fade On Take duration',
			options: [],
			callback: async () => {
				self.send('F-')
			},
		},
		increaseFadeOnTake: {
			name: 'Increase Fade On Take duration',
			options: [],
			callback: async () => {
				self.send('F+')
			},
		},
		decreaseTakeDuration: {
			name: 'Decrease Take duration',
			options: [],
			callback: async () => {
				self.send('T-')
			},
		},
		increaseTakeDuration: {
			name: 'Increase Take duration',
			options: [],
			callback: async () => {
				self.send('T+')
			},
		},
		// Need clarification on the ID expected here
		// selectClipForPreview: {
		// 	name: 'Select Clip by ID for Preview',
		// 	options: [
		// 		{
		// 			type: 'number',
		// 			label: 'clip ID',
		// 			id: 'clip',
		// 		},
		// 	],
		// 	callback: async (event) => {
		// 		self.send('SI' + parseInt(event.options.clip, 10))
		// 	},
		// },
		// takeClipById: {
		// 	name: 'Take Clip by ID',
		// 	options: [
		// 		{
		// 			type: 'number',
		// 			label: 'Clip ID',
		// 			id: 'clip',
		// 		},
		// 	],
		// 	callback: async (event) => {
		// 		self.send('TI' + parseInt(event.options.clip, 10))
		// 	},
		// },
		saveShow: {
			name: 'Save Show file',
			options: [],
			callback: async () => {
				self.send('SA')
			},
		},
		//Alejandro's Mod
		previewCurrentName: {
			name: 'Preview Current Name',
			options: [],
			callback: async () => {
				self.send({
					command: 'VN',
					expectsResponse: true,
					callback: (msg) => {
						self.setVariableValues({ previewCurrentName: msg })
					}
				})
			}
		},
		previewCurrentNumber: {
			name: 'Preview Current Number',
			options: [],
			callback: async () => {
				self.send({
					command: 'VU',
					expectsResponse: true,
					callback: (msg) => {
						self.setVariableValues({ previewCurrentNumber: msg })
					}
				})
			}
		},
		programCurrentName: {
			name: 'Program Current Name',
			options: [],
			callback: async () => {
				self.send({
					command: 'GN',
					expectsResponse: true,
					callback: (msg) => {
						self.setVariableValues({ programCurrentName: msg })
					}
				})
			}
		},
		programCurrentNumber: {
			name: 'Program Current Number',
			options: [],
			callback: async () => {
				self.send({
					command: 'GU',
					expectsResponse: true,
					callback: (msg) => {
						self.setVariableValues({ programCurrentNumber: msg })
					}
				})
			}
		},
		clearProgramCurrentName: {
			name: 'Clear Program Current Name',
			options: [],
			callback: async () => {
				self.setVariableValues({ programCurrentName: "Program Name" })
			}
		},
		clearProgramCurrentNumber: {
			name: 'Clear Program Current Number',
			options: [],
			callback: async () => {
				self.setVariableValues({ programCurrentNumber: "Program Number" })
			}
		},
		programTRT: {
			name: 'Poll TRT until zero',
			options: [],
			callback: async () => {
				self.startPollingTRT()
			}
		},
		stopTRTPolling: {
			name: 'Stop TRT Polling',
			options: [],
			callback: async () => {
				self.stopPollingTRT()
			}
		},
	}
}
