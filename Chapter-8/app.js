const http = require('http');
const data = require('./data');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  data();
});
const port = 3001;
server.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});