// Core module
const path = require('path');

// Eternal module 
const express = require('express');
const app = express();

// Local module
const roodDir = require('./utils/utilspath');
const userRouter = require('./router/userRouter');
const homeRouter = require('./router/homeRouter');

app.use(homeRouter);
app.use(userRouter);



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})
