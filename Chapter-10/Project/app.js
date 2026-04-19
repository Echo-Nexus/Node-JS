//Core Module
const path = require("path");

// External Module
const express = require('express');
const app = express();

// Local Module
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');
const rootDir = require("./utils/pathUtils");

app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});