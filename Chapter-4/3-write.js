const http = require('http');
const server = http.createServer((req, res) => {
  console.log('Request received');
  res.write("Hello, World!");
  res.end();
});

server.listen(3001);