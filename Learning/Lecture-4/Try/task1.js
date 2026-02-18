const http = require("http");

const server = http.createServer((req, res) => {

  console.log(req.url, req.method);
  if(req.url === '/men'){
    res.write(`
      <h1>Welcome to Men</h1>
    `)
    return res.end();
  } else if (req.url === '/home'){
    res.write(`
      <h1>Welcome to Home</h1>
    `)
    return res.end();
  } else if(req.url === '/women'){
    res.write(`
      <h1>Welcome to Women</h1>
    `)
    return res.end();
  } else if(req.url === '/cart'){
    res.write(`
      <h1>Welcome to Cart</h1>
    `);
    return res.end();
  } else if(req.url === '/kids'){
    res.write(`
      <h1>Welcome to Kids</h1>
    `);
    return res.end();
  }

    res.write(`
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
         <header>
    <nav>
    <ul>
    <li>
      <a href="/home">Home</a>
    </li>
    <li>
      <a href="/men">Men</a>
    </li>
        <li>
          <a href="/women">Women</a>
        </li>
        <li>
          <a href="/kids">kids</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  </header>
      </body>
    </html>
    `);

  });

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
