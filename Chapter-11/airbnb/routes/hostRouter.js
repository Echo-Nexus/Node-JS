// Core Modules
const path = require("path");

// External Modules
const express = require('express');
const hostRouter = express.Router();

// Local Modules 
const rootDir = require("../utils/pathUtils");

hostRouter.get('/add-home', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'addHome.html'));
});

hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;