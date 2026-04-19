// Core module
const path = require("path");

// External Modules
const express = require("express");

// Local Modules or Routers
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");
const app = express();

app.use(express.urlencoded((extendded = true))); // To parse form data
app.use(userRouter);
app.use('/host', hostRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
