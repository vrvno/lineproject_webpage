const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/api/email', emailRoutes); // Rutas para el envío de correos

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
