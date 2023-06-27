// Require all necessary dependencies
const express = require('express');

// Connects with express
const app = express();
// Creates a port
const PORT = process.env.PORT || 3001;

// Sets up all middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const api = require('./routes/api');
app.use('/api', api);

const html = require('./routes/html');
app.use('/', html);

// Initializes the server to listen to HTTP requests
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));