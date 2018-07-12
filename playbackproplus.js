var instance_skel = require('../../instance_skel');
var udp           = require('../../udp');
var debug;
var log;

function instance(system, id, config) {
	var self = this;

	// super-constructor
	instance_skel.apply(this, arguments);

	self.actions(); // export actions

	return self;
}

instance.prototype.updateConfig = function(config) {
	var self = this;

	self.config = config;
	self.init_udp();
};

instance.prototype.init_udp = function() {
	var self = this;

	self.status(self.STATUS_UNKNOWN);

	if (self.config.host !== undefined) {
		self.udp = new udp(self.config.host, 7000);

		self.udp.on('status_change', function (status, message) {
			self.status(status, message);
		});
	}
};

instance.prototype.init = function() {
	var self = this;

	debug = self.debug;
	log = self.log;

	self.init_udp();
};

// Return config fields for web config
instance.prototype.config_fields = function () {
	var self = this;
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP',
			width: 6,
			regex: self.REGEX_IP
		}
	]
};

// When module gets deleted
instance.prototype.destroy = function() {
	var self = this;

	if (self.udp !== undefined) {
		self.udp.destroy();
	}
	debug("destroy", self.id);
};

instance.prototype.actions = function(system) {
	var self = this;

	self.system.emit('instance_actions', self.id, {
		'take':     { label: 'Take' },
		'play':     { label: 'Play from current loacation'},
		'pause':    { label: 'Pause Resume' },
		'kill':     { label: 'Kill' },
		'freeze':   { label: 'Freeze temp' },
		'loop':     { label: 'Loop temp' },
		'link':     { label: 'Link temp'},
		'previous': { label: 'Previous Clip' },
		'next':     { label: 'Next Clip' },
		'10':       { label: 'Goto 10' },
		'20':       { label: 'Goto 20' },
		'30':       { label: 'Goto 30' },
		'ff':       { label: 'Fast forward program'},
		'fr':       { label: 'Fast Reverse program'},
		'goxxx':		{
			label: 'Load clip (id) into Preview',
			options: [
				{
					type: 'textinput',
					label: 'clip ID',
					id: 'clip',
					regex: self.REGEX_NUMBER
				}
			]
		},
		'gtxxx':	{
			label: 'Load clip (id) and Take',
			options: [
				{
					type: 'textinput',
					label: 'Clip ID',
					id: 'clip',
					regex: self.REGEX_NUMBER
				}
			]
		}
	});
};

instance.prototype.action = function(action) {
	var self = this;
	var cmd
	var opt = action.options

	switch(action.action){

		case 'take':
			cmd = 'TA';
			break;

		case 'play':
			cmd = 'PL'
			break;

		case 'pause':
			cmd = 'OP';
			break;

		case 'kill':
			cmd = 'KL';
			break;

		case 'freeze':
			cmd = 'FT';
			break;

		case 'loop':
			cmd = 'LT';
			break;

		case 'link':
			cmd = 'IT';
			break;

		case 'previous':
			cmd = 'PR';
			break;

		case 'next':
			cmd = 'NX';
			break;

		case '10':
			cmd = '10';
			break;

		case '20':
			cmd = '20';
			break;

		case '30':
			cmd = '30';
			break;

		case 'goxxx':
			cmd = 'GO'+ opt.clip;
			break;

		case 'gtxxx':
			cmd = 'GT'+ opt.clip;
			break;

		case 'ff':
			cmd = 'OF';
			break;

		case 'fr':
			cmd = 'OR';
			break;


	}

	if (cmd !== undefined ) {

		if (self.udp !== undefined ) {
			debug('sending',cmd,"to",self.udp.host);

			self.udp.send(cmd);
		}
	}

};

instance.module_info = {
	label: 'PlaybackPro Plus UDP',
	id: 'playbackproplus',
	version: '0.0.2'
};

instance_skel.extendedBy(instance);
exports = module.exports = instance;
