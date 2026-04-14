const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers );
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/plain');
    res.write("Hello, World!");
    return res.end();
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.write("Not Found");
    return res.end();
  }
  res.setHeader('Content-Type', 'text/plain');
  res.write("Default response");
  return res.end();
});

server.listen(3001);