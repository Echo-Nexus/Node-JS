const http = require('http');
const {logicalHandler} = require('./logical');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  logicalHandler();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
})