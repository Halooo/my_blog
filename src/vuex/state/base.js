export default {
	loading: false,
	alertConfig: {
		show: false,
		msg: 'alert message!', // support
		type: 'info', // info/warning/success/danger
		dismissible: false,
		delay: 2500
	},
	confirmConfig: {
		show: false,
		title: 'Confirm',
		msg: 'confirm msg',
		type: 'default', // default/primary/success/info/warning/danger
		applyFunc: 'func',
		cancelFunc: 'func',
		applyStr: 'Apply',
		cancelStr: 'Cancel'
	},
	permission: {}
};
