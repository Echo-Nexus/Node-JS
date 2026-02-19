const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second dummy Middleware", req.url, req.method);
  next();
});
// Not using because it can lead us to error of res.send or insted we can just comment the res.send();

// app.use((req, res, next) => {
//   console.log("Third dummy Middleware", req.url, req.method);
//   res.send("<h1>Third middleware.</h1>")
//   });

app.get("/", (req, res, next) => {
  console.log("Fourth dummy Middleware", req.url, req.method);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Provide your details ", req.url, req.method);
  res.send(`
    <h1> Provide your details </h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Name">
    <input type="text" name="email" placeholder="Email">
    <input type="text" name="message" placeholder="Message">
    <input type="submit">
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us POST request",req.body);
  res.send('<h1>Thanks for your info.</h1>')
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});