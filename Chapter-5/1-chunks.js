const http = require('http');
const fs = require('fs');
const { parse } = require('path');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if(req.url === '/contact')
  {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title> Welcome to Home</title></head>
        <body>
          <h1>Enter your form : </h1>
          <form action='/submit-details' method='POST' >
            <input type='text' name='name' placeholder='Ente your name '><br>
            <label for='gender'> Gender : </label> 
            <input type='radio' name='gender' id='male' value='male'> Male<br>
            <input type='radio' name='gender' id='female' value='female'> Female<br>
            <button type='submit'>Submit</button>
          </form>
        </body>
      </html>
      `);
      return res.end();
  } else if(req.url.toLocaleLowerCase() === '/submit-details' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunks) => {
      console.log(chunks);
      body.push(chunks);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const param = new URLSearchParams(parsedBody);
      // const jsonData = {};
      // for (const [key, val] of param.entries()) {
      //   jsonData[key] = val;
      
    const jsonData = Object.fromEntries(param);
      console.log(jsonData);
      fs.writeFileSync('komal.text', JSON.stringify(jsonData));
    });
    res.statusCode = 302; 
    res.setHeader('Location', '/');
    return res.end();  
  }
  else if(req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Welcome to home page</h1>");
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write("Page not found");
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port : http://Localhost:${PORT}`)
});