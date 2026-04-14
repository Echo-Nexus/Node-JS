const sumHandler = require('./sum');
const reqhandler = (req, res) => {
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
    return sumHandler(req, res);
  }
  res.setHeader('Content-Type', 'text/html');
  res.write("Page not found");
  res.write(`<a href='/'> Go to home page</a>  `);
  return res.end();
}

module.exports = reqhandler;