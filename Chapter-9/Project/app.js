const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  next();
});
app.get('/', (req, res, next) => {
  console.log("Third Middleware", req.url, req.method);
  res.send("<h1> Hello World</h1>");
});
app.get('/contact-us', (req, res, next) => {
  console.log("Fourth Middleware", req.url, req.method);
  res.send(`
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" required>
      <input type="email" name="email" placeholder="Enter your email" required>
      <button type="submit">Submit</button>
    </form>   
    `);
});

app.post('/contact-us', (req, res, next) => {
  console.log("Fifth Middleware", req.url, req.method);
  res.send("<h1> Form Submitted Successfully</h1>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});