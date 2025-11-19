// Vercel serverless function handler
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'API is running', message: 'WebSocket features require separate deployment' });
});

// Note: Code execution and WebSocket features are disabled in serverless
// Deploy the full api/index.js to a platform like Railway for full functionality

module.exports = app;
module.exports.handler = serverless(app);
