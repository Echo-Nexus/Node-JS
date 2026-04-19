const path = require('path');
const express = require('express');
const homeRouter = express.Router();
const rootDir = require('../utils/pathUtils');

homeRouter.get('/', (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = homeRouter;