// External Module 
const express = require('express');

// Internal Module
const app = express();

app.use('/',(req, res, next) => {
  console.log("First Middleware");
  res.send(`
    <h1> Welcome to home</h1>
    `);
});

app.get('/contact', (req, res, next) => {
  console.log("Second Middleware");
  res.send("<h1>Welcome to Contact</h1>");
});

app.use('/about', (req, res, next) => {
  console.log("Third Middleware");
  res.send("<h1>About</h1>");
});

// External Module
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});