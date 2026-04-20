const express = require('express');
const home_router = express.Router();
const path = require('path');
const rootDir = require('../utils/utilspath');

home_router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = home_router;