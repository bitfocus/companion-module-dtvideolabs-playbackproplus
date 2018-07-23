// PlayBackPro Plus TCP / UDP

var tcp           = require('../../tcp');
var udp           = require('../../udp');
var instance_skel = require('../../instance_skel');
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

if (self.udp !== undefined) {
	self.udp.destroy();
}

if (self.socket !== undefined) {
	self.socket.destroy();
	delete self.socket;
}

self.config = config;
	if (self.config.prot == 'tcp') {
		self.init_tcp();
	};
	if (self.config.prot == 'udp') {
		self.init_udp();
	};
};

instance.prototype.init = function() {
var self = this;

debug = self.debug;
log = self.log;
	if (self.config.prot == 'tcp') {
		self.status(1,'Connecting'); // status ok!
		self.init_tcp();
	};

	if (self.config.prot == 'udp') {
		self.init_udp();
	};
};

instance.prototype.init_udp = function() {
	var self = this;

	if (self.udp !== undefined) {
		self.udp.destroy();
	}

	self.status(self.STATUS_UNKNOWN);

	if (self.config.host !== undefined) {
		self.udp = new udp(self.config.host, 7000);

		self.udp.on('status_change', function (status, message) {
			self.status(status, message);
		});
	}
	if (self.socket !== undefined) {
		self.socket.destroy();
		delete self.socket;
	}
};

instance.prototype.init_tcp = function() {
var self = this;

if (self.socket !== undefined) {
	self.socket.destroy();
	delete self.socket;
}


if (self.config.host) {
	self.socket = new tcp(self.config.host, 4647);

	self.socket.on('status_change', function (status, message) {
		self.status(status, message);
	});

	self.socket.on('error', function (err) {
		debug("Network error", err);
		self.status(self.STATE_ERROR, err);
		self.log('error',"Network error: " + err.message);
	});

	self.socket.on('connect', function () {
		self.status(self.STATE_OK);
		debug("Connected");
	})

	self.socket.on('data', function (data) {});
}
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
	},
	{
		type: 'dropdown',
		id: 'prot',
		label: 'Connect with TCP / UDP',
		choices:  [
			{ id: 'udp', label: 'UDP' },
			{ id: 'tcp', label: 'TCP' }
		]
	}
]
};

// When module gets deleted
instance.prototype.destroy = function() {
var self = this;

if (self.socket !== undefined) {
	self.socket.destroy();
}
if (self.udp !== undefined) {
	self.udp.destroy();
}

debug("destroy", self.id);;
};

instance.prototype.actions = function(system) {
	var self = this;

	self.system.emit('instance_actions', self.id, {
		'take':     { label: 'Take' },
		'play':     { label: 'Play from current location'},
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
			cmd = 'GO'+ parseInt(opt.clip);
			break;

		case 'gtxxx':
			cmd = 'GT'+ parseInt(opt.clip);
			break;

		case 'ff':
			cmd = 'OF';
			break;

		case 'fr':
			cmd = 'OR';
			break;


	}
	if (self.config.prot == 'tcp') {
		if (cmd !== undefined) {

			debug('sending ',cmd,"to",self.config.host);

			if (self.socket !== undefined && self.socket.connected) {
				self.socket.send(cmd);
			} else {
				debug('Socket not connected :(');
			}
		}
	};
	if (self.config.prot == 'udp') {

		if (cmd !== undefined ) {

			if (self.udp !== undefined ) {
				debug('sending',cmd,"to",self.config.host);

				self.udp.send(cmd);
			}
		}
	};

};



instance.module_info = {
	label: 'PlayBackPro Plus',
	id: 'playbackproplus',
	version: '0.0.5'
};

instance_skel.extendedBy(instance);
exports = module.exports = instance;
