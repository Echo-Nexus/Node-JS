const express = require('express');
const user_router = express.Router();
const path = require('path');
const rootDir = require('../utils/utilspath');

user_router.get('/add-user', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
});

module.exports = user_router;