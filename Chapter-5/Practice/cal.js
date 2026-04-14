const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if(req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1> Welcome to home page</h1>
      <a href='/calculator'> Go to calculator</a>
    `);
    return res.end();
  } else if(req.url.toLowerCase() === '/calculator' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title> Calculator</title></head>
      <body>
      <h1> Calculator </h1>
      <form action='/calculate-result' method='POST'>
        <input type='number' name='num1' placeholder='Enter first number'><br>
        <input type='number' name='num2' placeholder='Enter second number'><br>
        <button type='submit'>SUM</button>
      </form>
      </body>
      </html>
    `);
    return res.end();
  }
  else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
    console.log("All done now summing up the numbers");
    const body = [];
    req.on('data', (chunks) => {
      body.push(chunks);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const jsonData = {};
      const params = new URLSearchParams(parsedBody);
      // params.forEach((val, key) => {
      //   jsonData[key] = val;
      // });
       for(const [key, val] of params.entries()) {
        jsonData[key] = val;
      }
      // const sum = Number(jsonData['num1']) + Number(jsonData['num2']);
      const sum = parseInt(jsonData['num1']) + parseInt(jsonData['num2']);
      console.log(sum);
      console.log("Successfully calculated the sum");
      res.setHeader('Content-Type', 'text/html');
      res.write(`<h1> Result: ${sum} </h1>`);
      res.end();
      // const jsonData = Object.fromEntries(parsedBody);
    });
  }
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});