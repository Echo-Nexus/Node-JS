const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Welcome to Home</h1>");
    res.write("<a href='/about'>About</a>");
    res.write("<a href='/contact'>Contact</a>");
    res.write("<a href='/services'>Services</a>");
    res.write("<a href='/blog'>Blog</a>");
    return res.end();
  }
  else if(req.url === '/about' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Welcome to About Us</h1>");
    return res.end();
  }
    else if(req.url === '/contact' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Welcome to Contact Us</h1>");
    return res.end();
  }
    else if(req.url === '/services' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Welcome to Services</h1>");
    return res.end();
  }
    else if(req.url === '/blog' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Welcome to Blog</h1>");
    return res.end();
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>404 Not Found</h1>");
    return res.end();
  }
});

server.listen(3001);