// Core Module
const path = require('path');
// External Module
const express = require("express");

// Local Modules
const userRouter = require("./routers/user-router");
const hostRouter = require("./routers/host-router");
const rootDir = require("./utils/pathUtil");

 
const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir, "public")));
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});