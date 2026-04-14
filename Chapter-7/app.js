const http = require('http');
const server = http.createServer((req, res) => {console.log('Request received');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!');
});
server.listene(3000, () => {
  console.log('Server is running on port 3000');
});