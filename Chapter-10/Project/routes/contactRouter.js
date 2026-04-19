const path = require('path');
const express = require('express');
const contactHandler = express.Router();
const rootDir = require('../utils/pathUtils');

contactHandler.get('/contact-us', (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

contactHandler.post('/contact-us', (req, res, next) => {
  console.log(req.url, req.method);
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'result.html'));
});

module.exports = contactHandler;