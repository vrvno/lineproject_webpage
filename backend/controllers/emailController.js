const transporter = require('../config/mailer');

const sendEmail = async (req, res) => {
	const { to, subject, text } = req.body;

	try {
		await transporter.sendMail({
			from: 'testing@lineproject.cl',
			to,
			subject,
			text,
		});
		res.status(200).json({ message: 'Email sent successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error sending email', error });
	}
};

module.exports = { sendEmail };
