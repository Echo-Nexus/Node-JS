const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text.html');
    res.write(`
      <h1> Welcome to home page </h1>
      <form action='/send' method='POST' >
        <input type='text' name='name' placeholder='Enter Your Name'>
        <input type='text' name='email' placeholder='Enter Your Email'>
        <button type='submit'>Submit</button>
      </form>
      <a href='/'> Home </a>
      `);
    return res.end();
  } else if(req.url === '/send' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => body.push(chunk));
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync('user.test', JSON.stringify(bodyObject));
    });
  }
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// This is the revision.....