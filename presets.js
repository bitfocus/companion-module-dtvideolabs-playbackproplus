import { combineRgb } from "@companion-module/base"

// import { combineRgb } from '@companion-module/base'
const BLACK = 0
const WHITE = 16777215

export function getPresetDefinitions() {
	return {
		'program-take': {
			category: 'Program',
			type: 'button',
			name: 'Take',
			style: {
				text: '',
				png64: ICON_PLAY_INACTIVE,
				pngalignment: 'center:center',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'take',
						},
						{
							actionId: 'programCurrentNumber',
							delay: 200
						},
						{
							actionId: 'programTRT',
							delay: 200
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-kill': {
			category: 'Program',
			type: 'button',
			name: 'End Playback (kill)',
			style: {
				text: '',
				png64: ICON_STOP_INACTIVE,
				pngalignment: 'center:center',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'kill',
						},
						{
							actionId: 'programCurrentNumber',
							delay: 200
						},
						{
							actionId: 'programTRT',
							delay: 200
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-pause': {
			category: 'Program',
			type: 'button',
			name: 'Pause/Play (Program)',
			style: {
				text: '',
				png64: ICON_PAUSE_INACTIVE,
				pngalignment: 'center:center',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pause',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-link': {
			category: 'Program',
			type: 'button',
			name: 'Link Temp (Toggle)',
			style: {
				style: 'text',
				text: 'Link',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'link',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-freeze': {
			category: 'Program',
			type: 'button',
			name: 'Freeze Temp (Toggle)',
			style: {
				style: 'text',
				text: 'Freeze',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'freeze',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-loop': {
			category: 'Program',
			type: 'button',
			name: 'Loop Temp (Toggle)',
			style: {
				style: 'text',
				text: 'Loop',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'loop',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-last30': {
			category: 'Program',
			type: 'button',
			name: 'Goto last 30 seconds (Program)',
			style: {
				style: 'text',
				text: 'Last\\n30 Sec',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'last30',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-last20': {
			category: 'Program',
			type: 'button',
			name: 'Goto last 20 seconds (Program)',
			style: {
				style: 'text',
				text: 'Last\\n20 Sec',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'last20',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-last10': {
			category: 'Program',
			type: 'button',
			name: 'Goto last 10 seconds (Program)',
			style: {
				style: 'text',
				text: 'Last\\n10 Sec',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'last10',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-fast-reverse': {
			category: 'Program',
			type: 'button',
			name: 'Fast Reverse (Program)',
			style: {
				style: 'text',
				text: 'Rew\\nPGM',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pgmFR',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-fast-fwd': {
			category: 'Program',
			type: 'button',
			name: 'Fast Forward (Program)',
			style: {
				style: 'text',
				text: 'FF\\nPGM',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pgmFF',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-step-back': {
			category: 'Program',
			type: 'button',
			name: 'Step Backward (Program)',
			style: {
				style: 'text',
				text: '<Step\\nPGM',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pgmStepBack',
						},
					],
				},
			],
			feedbacks: [],
		},
		'program-step-fwd': {
			category: 'Program',
			type: 'button',
			name: 'Step Forward (Program)',
			style: {
				style: 'text',
				text: 'Step>\\nPGM',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pgmStepFwd',
						},
					],
				},
			],
			feedbacks: [],
		},
		// PVW and PGM Goto In and Out don't seem to work, leaving it off the presets while I follow up with the vendor.
		// 'program-goto-in': {
		// 	category: 'Program',
		// 	type: 'button',
		// 	name: 'Goto IN',
		// 	style: {
		// 		style: 'text',
		// 		text: 'Goto\\nIN\\nPGM',
		// 		size: '14',
		// 		color: WHITE,
		// 		bgcolor: BLACK,
		// 	},
		// 	steps: [
		// 		{
		// 			down: [
		// 				{
		// 					actionId: 'pgmGotoIn',
		// 				},
		// 			],
		// 		},
		// 	],
		// 	feedbacks: [],
		// },
		// 'program-goto-out': {
		// 	category: 'Program',
		// 	type: 'button',
		// 	name: 'Goto Out',
		// 	style: {
		// 		style: 'text',
		// 		text: 'Goto\\nOut\\nPGM',
		// 		size: '14',
		// 		color: WHITE,
		// 		bgcolor: BLACK,
		// 	},
		// 	steps: [
		// 		{
		// 			down: [
		// 				{
		// 					actionId: 'pgmGotoOut',
		// 				},
		// 			],
		// 		},
		// 	],
		// 	feedbacks: [],
		// },
		'preview-prev': {
			category: 'Preview',
			type: 'button',
			name: 'Previous (Preview)',
			style: {
				text: '',
				png64: ICON_PREV,
				pngalignment: 'center:center',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			options: {
				relativeDelay: 200
			},
			steps: [
				{
					down: [
						{
							actionId: 'previous',
							
						},
						{
							actionId: 'previewCurrentNumber',
							delay: 200
						},
						{
							actionId: 'previewCurrentName',
							delay: 200
						}
					]
				},
			],
			
			feedbacks: [],
		},
		'preview-next': {
			category: 'Preview',
			type: 'button',
			name: 'Next (Preview)',
			style: {
				text: '',
				png64: ICON_NEXT,
				pngalignment: 'center:center',
				size: '18',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'next',
						},
						{
							actionId: 'previewCurrentNumber',
							delay: 200
						},
						{
							actionId: 'previewCurrentName',
							delay: 200
						}
					]
				},
			],
			feedbacks: [],
		},
		'preview-pause': {
			category: 'Preview',
			type: 'button',
			name: 'Play/Pause (Preview)',
			style: {
				style: 'text',
				text: 'Play\\nPause\\nPVW',
				size: '14',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pvwPause',
						},
					],
				},
			],
			feedbacks: [],
		},
		'preview-rewind': {
			category: 'Preview',
			type: 'button',
			name: 'Fast Reverse (Preview)',
			style: {
				style: 'text',
				text: 'Rev\\nPVW',
				size: '14',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pvwFR',
						},
					],
				},
			],
			feedbacks: [],
		},
		'preview-fast-fwd': {
			category: 'Preview',
			type: 'button',
			name: 'Fast Forward (Preview)',
			style: {
				style: 'text',
				text: 'FF\\nPVW',
				size: '14',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pvwFF',
						},
					],
				},
			],
			feedbacks: [],
		},
		'preview-step-back': {
			category: 'Preview',
			type: 'button',
			name: 'Step Back (Preview)',
			style: {
				style: 'text',
				text: 'Step\\nBack\\nPVW',
				size: '14',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pvwStepRev',
						},
					],
				},
			],
			feedbacks: [],
		},
		'preview-step-fwd': {
			category: 'Preview',
			type: 'button',
			name: 'Step FWD (Preview)',
			style: {
				style: 'text',
				text: 'Step\\nFWD\\nPVW',
				size: '14',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'pvwStepFwd',
						},
					],
				},
			],
			feedbacks: [],
		},
		// 'preview-goto-in': {
		// 	category: 'Preview',
		// 	type: 'button',
		// 	name: 'Goto In (PVW)',
		// 	style: {
		// 		style: 'text',
		// 		text: 'Goto\\nIn\\nPVW',
		// 		size: '14',
		// 		color: WHITE,
		// 		bgcolor: BLACK,
		// 	},
		// 	steps: [
		// 		{
		// 			down: [
		// 				{
		// 					actionId: 'pvwGotoIn',
		// 				},
		// 			],
		// 		},
		// 	],
		// 	feedbacks: [],
		// },
		// 'preview-goto-out': {
		// 	category: 'Preview',
		// 	type: 'button',
		// 	name: 'Goto Out (PVW)',
		// 	style: {
		// 		style: 'text',
		// 		text: 'Goto\\nOut\\nPVW',
		// 		size: '14',
		// 		color: WHITE,
		// 		bgcolor: BLACK,
		// 	},
		// 	steps: [
		// 		{
		// 			down: [
		// 				{
		// 					actionId: 'pvwGotoOut',
		// 				},
		// 			],
		// 		},
		// 	],
		// 	feedbacks: [],
		// },
		'preview-mark-in': {
			category: 'Preview',
			type: 'button',
			name: 'Mark In (Preview)',
			style: {
				style: 'text',
				text: 'Mark\\nIn\\nPVW',
				size: '14',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'markIn',
						},
					],
				},
			],
			feedbacks: [],
		},
		'preview-mark-out': {
			category: 'Preview',
			type: 'button',
			name: 'Mark Out (Preview)',
			style: {
				style: 'text',
				text: 'Mark\\nOut\\nPVW',
				size: '14',
				color: WHITE,
				bgcolor: BLACK,
			},
			steps: [
				{
					down: [
						{
							actionId: 'markOut',
						},
					],
				},
			],
			feedbacks: [],
		},
		'preview-name': {
			category: 'Information',
			type: 'button',
			name: 'Clip Name (Preview)',
			style: {
				style: 'text',
				text: '$(pbp:previewCurrentName)',
				size: '14',
				color: WHITE,
				bgcolor: combineRgb(58, 235, 52),
			},
			steps: [
				{
					down: [
					],
				},
			],
			feedbacks: [],
		},
		'preview-number': {
			category: 'Information',
			type: 'button',
			name: 'Clip Number (Preview)',
			style: {
				style: 'text',
				text: '$(pbp:previewCurrentNumber)',
				size: '14',
				color: WHITE,
				bgcolor: combineRgb(58, 235, 52),
			},
			steps: [
				{
					down: [
					],
				},
			],
			feedbacks: [],
		},
		'program-name': {
			category: 'Information',
			type: 'button',
			name: 'Clip Number (Program)',
			style: {
				style: 'text',
				text: '$(pbp:programCurrentName)',
				size: '14',
				color: WHITE,
				bgcolor: combineRgb(235, 55, 52),
			},
			steps: [
				{
					down: [
					],
				},
			],
			feedbacks: [],
		},
		'program-number': {
			category: 'Information',
			type: 'button',
			name: 'Clip Number (Program)',
			style: {
				style: 'text',
				text: '$(pbp:programCurrentNumber)',
				size: '14',
				color: WHITE,
				bgcolor: combineRgb(235, 55, 52),
			},
			steps: [
				{
					down: [
					],
				},
			],
			feedbacks: [],
		},
		'program-TRT': {
			category: 'Information',
			type: 'button',
			name: 'Clip Number (Program)',
			style: {
				style: 'text',
				text: '$(pbp:programTRT)',
				size: '14',
				color: WHITE,
				bgcolor: combineRgb(235, 55, 52),
			},
			steps: [
				{
					down: [
					],
				},
			],
			feedbacks: [],
		},
	}
}
const ICON_PLAY_INACTIVE =
	'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wNi0wNFQwMDowNzoyNSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wNi0wNFQxMToyMTo0NSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDYtMDRUMTE6MjE6NDUrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRmZWVhMGMzLTU1NjQtNDBkNi04NTFhLTJhOThmYjY3OTQ3ZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJlOGYwNzIzLTJmNTktOWY0Ny1hNDA0LTBhYTk5MmI4OTA5MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmNlZDYyMWNiLTU3MmItNGMyZS1hYTU4LTUwYTJiN2YwYzNjZCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNlZDYyMWNiLTU3MmItNGMyZS1hYTU4LTUwYTJiN2YwYzNjZCIgc3RFdnQ6d2hlbj0iMjAxOC0wNi0wNFQwMDowNzoyNSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzAxMDE1Mi1mNDc5LTQzMmItYjdlYi1iZmYxOGU4ZWZlN2IiIHN0RXZ0OndoZW49IjIwMTgtMDYtMDRUMTE6MjE6NDUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGZlZWEwYzMtNTU2NC00MGQ2LTg1MWEtMmE5OGZiNjc5NDdlIiBzdEV2dDp3aGVuPSIyMDE4LTA2LTA0VDExOjIxOjQ1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmEzMDEwMTUyLWY0NzktNDMyYi1iN2ViLWJmZjE4ZThlZmU3YiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjZWQ2MjFjYi01NzJiLTRjMmUtYWE1OC01MGEyYjdmMGMzY2QiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWQ2MjFjYi01NzJiLTRjMmUtYWE1OC01MGEyYjdmMGMzY2QiLz4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJSZWMgV2hpdGUiIHBob3Rvc2hvcDpMYXllclRleHQ9Ij0iLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJSZWMgcmVkIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI9Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2tpcCBCYWNrIFdoaXRlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI5Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2tpcCBCYWNrIEJsdWUiIHBob3Rvc2hvcDpMYXllclRleHQ9IjkiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJTa2lwIEZ3ZCB3aGl0ZSIgcGhvdG9zaG9wOkxheWVyVGV4dD0iOiIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlNraXAgRndkIEJsdWUiIHBob3Rvc2hvcDpMYXllclRleHQ9IjoiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJQbGF5IFdoaXRlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI0Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iUGxheSBHcmVlbiIgcGhvdG9zaG9wOkxheWVyVGV4dD0iNCIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlBhdXNlIFdoaXRlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI7Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iUGF1c2UgWWVsbG93IiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI7Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU3RvcCBXaGl0ZSIgcGhvdG9zaG9wOkxheWVyVGV4dD0iJmx0OyIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlN0b3AgUmVkIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSImbHQ7Ii8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6vUl74AAAA8ElEQVR42u3bSw3CQBQF0FqoBSxgAQu1gIVawAIWagELSAALWHgMTbtownwIK8ghuRu6IDkJc9uZ1y4iOskHAiBAgAABWn7s1o0p/ea7Lz//BnRJuafsAOWBIuWRcgCUB1ozACoDxbwuASoCvTIBKgPFcq0HlAeKteEAlTM3HKB6BkD1jIDqmQDVc801HKBtw+0BfdhwgN7nCKieE6CGhgPU2HCAGhoOUEPDAWpoOEANDQeonDMgfzGLtJp3o+hRw8Oq7Q4bZrZcAdm0d+zj4NDRs+EF4y8GqIzgGeI0BgzIILlXEbzMIoAAAQIE6DfyBIZxyJlmS8HgAAAAAElFTkSuQmCC'
const ICON_PAUSE_INACTIVE =
	'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wNi0wNFQwMDowNzoyNSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wNi0wNFQxMToyMjoxOSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDYtMDRUMTE6MjI6MTkrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmRkZDAxZWNjLTZjMzItNGZjMi04YzgxLTMwM2Y2Y2M5MzVhNCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjEwOTEyZDk3LWI1MWEtOWI0Ny05YWRkLWQ0MGNmM2Y0NDFkYyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmNlZDYyMWNiLTU3MmItNGMyZS1hYTU4LTUwYTJiN2YwYzNjZCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNlZDYyMWNiLTU3MmItNGMyZS1hYTU4LTUwYTJiN2YwYzNjZCIgc3RFdnQ6d2hlbj0iMjAxOC0wNi0wNFQwMDowNzoyNSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplOGIyZmYzNC0xNmFmLTQ5MzItYjE1Yy1kMmZlNDE3Y2EyOTkiIHN0RXZ0OndoZW49IjIwMTgtMDYtMDRUMTE6MjI6MTkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGRkMDFlY2MtNmMzMi00ZmMyLThjODEtMzAzZjZjYzkzNWE0IiBzdEV2dDp3aGVuPSIyMDE4LTA2LTA0VDExOjIyOjE5KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmU4YjJmZjM0LTE2YWYtNDkzMi1iMTVjLWQyZmU0MTdjYTI5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjZWQ2MjFjYi01NzJiLTRjMmUtYWE1OC01MGEyYjdmMGMzY2QiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWQ2MjFjYi01NzJiLTRjMmUtYWE1OC01MGEyYjdmMGMzY2QiLz4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJSZWMgV2hpdGUiIHBob3Rvc2hvcDpMYXllclRleHQ9Ij0iLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJSZWMgcmVkIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI9Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2tpcCBCYWNrIFdoaXRlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI5Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2tpcCBCYWNrIEJsdWUiIHBob3Rvc2hvcDpMYXllclRleHQ9IjkiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJTa2lwIEZ3ZCB3aGl0ZSIgcGhvdG9zaG9wOkxheWVyVGV4dD0iOiIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlNraXAgRndkIEJsdWUiIHBob3Rvc2hvcDpMYXllclRleHQ9IjoiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJQbGF5IFdoaXRlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI0Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iUGxheSBHcmVlbiIgcGhvdG9zaG9wOkxheWVyVGV4dD0iNCIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlBhdXNlIFdoaXRlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI7Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iUGF1c2UgWWVsbG93IiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI7Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU3RvcCBXaGl0ZSIgcGhvdG9zaG9wOkxheWVyVGV4dD0iJmx0OyIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlN0b3AgUmVkIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSImbHQ7Ii8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4GJG/aAAAAeElEQVR42u3aMQ0AIAxFwarFE94QgYOCAVImFq7JWzvc/CMzQ+cgAAIECBAgQIAA6S3QHNF2WdSjuNs/gAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACZAQsQIECAAAECBOjzFkEkVRGHBIsZAAAAAElFTkSuQmCC'
const ICON_STOP_INACTIVE =
	'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wNi0wNFQwMDowNzoyNSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wNi0wNFQxMToyMjo0NyswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDYtMDRUMTE6MjI6NDcrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBmM2U0Y2VhLTQ2NDEtNDhhYS04N2I2LWMxYjRlZTJkOWE5NCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBjYzc0NDRhLWE1ZDUtNmY0NC05NjdjLWU4YWRlZmI2MTYzOCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmNlZDYyMWNiLTU3MmItNGMyZS1hYTU4LTUwYTJiN2YwYzNjZCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNlZDYyMWNiLTU3MmItNGMyZS1hYTU4LTUwYTJiN2YwYzNjZCIgc3RFdnQ6d2hlbj0iMjAxOC0wNi0wNFQwMDowNzoyNSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OTliODFjZC00NzM3LTRmYzAtYWIwYi1jMGY2YzgwNzk1ODkiIHN0RXZ0OndoZW49IjIwMTgtMDYtMDRUMTE6MjI6NDcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGYzZTRjZWEtNDY0MS00OGFhLTg3YjYtYzFiNGVlMmQ5YTk0IiBzdEV2dDp3aGVuPSIyMDE4LTA2LTA0VDExOjIyOjQ3KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg5OWI4MWNkLTQ3MzctNGZjMC1hYjBiLWMwZjZjODA3OTU4OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjZWQ2MjFjYi01NzJiLTRjMmUtYWE1OC01MGEyYjdmMGMzY2QiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWQ2MjFjYi01NzJiLTRjMmUtYWE1OC01MGEyYjdmMGMzY2QiLz4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJSZWMgV2hpdGUiIHBob3Rvc2hvcDpMYXllclRleHQ9Ij0iLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJSZWMgcmVkIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI9Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2tpcCBCYWNrIFdoaXRlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI5Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2tpcCBCYWNrIEJsdWUiIHBob3Rvc2hvcDpMYXllclRleHQ9IjkiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJTa2lwIEZ3ZCB3aGl0ZSIgcGhvdG9zaG9wOkxheWVyVGV4dD0iOiIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlNraXAgRndkIEJsdWUiIHBob3Rvc2hvcDpMYXllclRleHQ9IjoiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJQbGF5IFdoaXRlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI0Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iUGxheSBHcmVlbiIgcGhvdG9zaG9wOkxheWVyVGV4dD0iNCIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlBhdXNlIFdoaXRlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI7Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iUGF1c2UgWWVsbG93IiBwaG90b3Nob3A6TGF5ZXJUZXh0PSI7Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU3RvcCBXaGl0ZSIgcGhvdG9zaG9wOkxheWVyVGV4dD0iJmx0OyIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlN0b3AgUmVkIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSImbHQ7Ii8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4n7NdoAAAAb0lEQVR42u3aMQ0AIADEwPevEbQ8GGAGkhtq4OambXQOAiBAgAABAgQIkAABeh1oJHPXy01AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAmTB8ygCAgQIECABAgQIEKAvWz9emwZhCZEoAAAAAElFTkSuQmCC'
const ICON_PREV =
	'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmIwZjhiZTkwLCAyMDIxLzEyLzE1LTIxOjI1OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAzNjFkNDU5LWIxMmMtOTQ0YS05Nzc1LThhYjNlYjc2M2VlZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0NDNEFCOTlDOTAxMUVDQkIxRkI0NjRDQzg0OUNFOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0NDNEFCODlDOTAxMUVDQkIxRkI0NjRDQzg0OUNFOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzYxZDQ1OS1iMTJjLTk0NGEtOTc3NS04YWIzZWI3NjNlZWYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDM2MWQ0NTktYjEyYy05NDRhLTk3NzUtOGFiM2ViNzYzZWVmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wjwHQwAAA9NJREFUeNrsnM9LG0EUxye5eDCNFnopJYVeCoKH3nsJBUEUFTwLHgSDCAp68+Rf0JO9CNVbCXgq8SAUJBfvHoRiPIgJ1otQTSKCiK/vS8ZiLdkfM2+SzSYPvhh2Z+e9+ezM7MzujAkiUs0skVAuLMP6wBpmvWe9Y71hvWKldJo665J1zjpllVhHrENWRTogDwQq0SJAQ6xPrCzrI+u1YT4XrANWkbXP+tnpgEZYU6wJ1lvhG19mFVjfWT9cAVIA1Ex81lRcU2iTVW24d6qq9pU1jdeTgTAg7l9onVVuAZjnKmvfmagCGmUV2gDmuQo6lkgByrGOIwDnUcc6prYD4m6c1li1CMF5VE3HlmgXoIRu89aFGRwkmpkhurtrCL9xTAjUuh8kV4DWpO728jLR/T39NfzGMcHatNZqQDmJZtXXRzQ5SXRzQ/8ZjuEc0gg1t1yrAI1KdcgrK0T1OjU1nEMawY571DWgjNSjHLXj4YF8DWmQVnAIkHEJyLpTTqeJ5uaIrq4osCEtrsG1Qp22E0BZiRFyLkfGhmuFRtxZF4A2bQJ78YJoepqoWjUHhGuRB/KyhLQpDWjEduK5ukp0e0vWhjyQl8AEd0QS0IZNQOPjjQGglCEv5GkJaUMK0BDrzCSIZLIx4KvVSNyQJ/KGD0NAZ7ps1oAWTe/S1BQ5N/iwqEWLEoB2TOZWs7PhHuWmBh/wZTh327EFhEHVr7COFxaCDQKlDL7g0wAQypaxATQRxmF/f2PU66LPCdInwTdiCAlpwotB0ud99nCYl985ng7m80qlUqrlBp/wjRhC2rDPG33PGrQd9E6Mjf37yqJdhhgQS4gatG3TxIp+DlIpovn51nTIYTpuxITYAgAq2gA68XOAJ0hUDbEFAHTixcDvw+Fv/jPo1USvr5VKp1UkrcoTioEB32Rc39TLZif9OumUir95ljFpm/vSUnRLLhGbdRMT/xbuFayb1SZWTeyyC5rYpU0TO+8CQOc2gE67ANCpDaBSFwAq2QA66gJARzaADvWyt7jahS6jMaCKXhMYVzvwWxQaZKBYjDEg37IFAbSvF0zGzcq6bNaAsNS2EENABRVgGXHQuRiW2tZiBKemy6SkAGEdcj5GgPIq4NrqMLP5b8rBNoA2WEWXRUkDQo+/FQNAW2GezGHfB31l7XYwnF1dBuUKEKrnlw6do5V07BWXgGB7rM+qsWXJyPCuuBXXPLG6jnkv9JXtWAZs8iUk4BeKyCwDVpILyR1rvV0LyVVvK0JvM0tvO1RvQ13EAKm4bcnsbepVvW3hHQHoqXXUPxb4I8AAumRh4xsAZKwAAAAASUVORK5CYII='
const ICON_NEXT =
	'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmIwZjhiZTkwLCAyMDIxLzEyLzE1LTIxOjI1OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAzNjFkNDU5LWIxMmMtOTQ0YS05Nzc1LThhYjNlYjc2M2VlZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyREQxRDA1MDlDOTAxMUVDOUYzOUIyNTlBNkE1Q0RFMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyREQxRDA0RjlDOTAxMUVDOUYzOUIyNTlBNkE1Q0RFMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzYxZDQ1OS1iMTJjLTk0NGEtOTc3NS04YWIzZWI3NjNlZWYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDM2MWQ0NTktYjEyYy05NDRhLTk3NzUtOGFiM2ViNzYzZWVmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GQu1nwAAA9ZJREFUeNrsnE1LW0EUhifS4sIkunAjcgU3gYAL926CIAQ1Cq6kCAEDBhEUFARd5Ue48i+4KoKbQnHTfRdCsS5ES9tNF+ZDAlY8PS+ZQElrbubjfiYHXgzJnTlnntyZ3Jk5Y4KIxGuWSAgvzGHNsmZYGdY0a5I1zkrKaxqsX6zvrFvWV9YV6zPrm+2AuiAQCZ8AZVnzrBxrjjWhWc9P1ifWJesj60vUAS2wVlkF1pTlL/6edc56z/rgFSABQK+JP9UV3yl0yqq13HuqmvSV0423KwPLgHh8oQrr3gcwnbqXvp2wAsqzzgMA06lzGUuoAJVZ1yGA09a1jClwQDyM0zGrHiI4bdVlbImgACVkn1cOvlgkZUMZTVAVN0heATrW/XarVXVAKGNwNx37Dahs0q10zbC7lf0ClDcdkAMA1B6486qAhjTmUTtyDhU1y8jYHZVCqoBKrGURXVuWbfAEECaamyL6tinbYh3QO9XbM6TmyLZYBYRZ+bqIj63LNlkDhCWLVIwApWSbrADKyvWcuFlBts0Y0LwHi11hsCnZNmNAORFfy5kCcuQaclxtzu2X2Q3QrMECexRsQrZRG9CMiL/NmADK9AGgjAmg6T4ANG0CaLIPAE2aABp3q71YVF+Z0TVVP4itB+vaRred1d/85023CqpVIdLpcN4atZoQo6Oulz0zgrc2ZvN9aW6AGm4V7O6Gt3E9xtZw6ddd16Rv3Hp6Mkm0tUX08EChMcSCmBBbD6PVjcmi/WWvQ+LiItHzc/BwEANiURjOL00W7W97vZ0vLoQ4PBSi2QyuS8E3YkAsCnZr0sWOVH5YR0aIVlaI6nX/7xz4hG/EoPhAcGTSxQo6e1Db20QvL/7BgS/41NwvK5gAQq7ND1WnY2OtvXQ/Bm74gC/41ICDtjmmO6tnuruZq6veA4IPg93WMxtbzzu6AQwNEe3teTMmoU7UDR8GgHZsAMqy7kz2xZeWiJ6e7MFBXajTcK/+TrbNSvLCiWlC08EBUbNpDgd1oC4LCVYnNrM7FkwzVlMporU1olpNHw7Kog7UZSEzdsF2+supjdS4clkfEMpaSs879SI/KGcjvTedJiqV1B4BcC3KoKyldOGcVwlUFVtJlnjq7eVhEtfgWovJnRUvM8wcm7nQ+/tEjcbrcPAZrrGcQ+2EPgWvreHh1t3x+PgvHLyHz3CNxdzpfCSSODuFB76/l0rwGu9ZzpkuRyYN+H9zt42N1gMghNeac6vQpAELk0Ryn1UJKpFcDI4iDA6zDI5DDQ7UhQyQiNuRzMGhXjE4Fh4JQJ15j5H5xwJ/BBgAhiGSSA5GHzIAAAAASUVORK5CYII='
