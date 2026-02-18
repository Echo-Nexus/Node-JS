const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Hello World</title></head>');
  res.write('<h1>Hello World</h1>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});