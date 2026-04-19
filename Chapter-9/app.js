// // Core module 
// const http = require('http');

// // External Module
// const express = require('express');

// // Internal module 
// // const reqHandler = require('./reqHandler');

// const app = express();



// app.use((req, res, next) => {
//   console.log('Came in first middleware');
//   res.send("<h1>Hello from Express!</h1>");
//   next();
// });

// const server = http.createServer(app);
// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });


const express = require('express');
const app = express();


app.use('/',(req, res, next) => {
  console.log('Came in first middleware', req.url, req.method);
  res.send("<h1>Hello from Express Home!</h1>");
});
app.use('/about', (req, res, next) => {
  console.log('Came in second middleware', req.url, req.method );
  res.send("<h1>Hello from Express About!</h1>");
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});