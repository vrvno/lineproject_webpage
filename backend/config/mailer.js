const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'mail.lineproject.cl',
	port: 465,
	secure: true,
	auth: {
		user: 'testing@lineproject.cl',
		pass: '73466843563xD!',
	},
});

module.exports = transporter;
