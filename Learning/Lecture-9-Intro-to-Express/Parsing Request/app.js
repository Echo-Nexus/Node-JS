// External Module 
const express = require("express");
// Internal Module

const requestHandler = require("./parsing-request");
const app = express();

// Learned to use middlewares in express.js
// We can add paths also here app.use(path, function)
app.use('/', (req, res, next) => {
  console.log("First Middleware");
  next();
});

app.use('/submit-details',(req, res, next) => {
  console.log("Second Middleware");
  res.send("<h1>Hello World</h1>")
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});