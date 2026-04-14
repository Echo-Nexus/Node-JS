const http = require('http');
const server = http.createServer((req, res) => {
  console.log('Request received');
  console.log(req.url, req.method, req.headers);
});

server.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
