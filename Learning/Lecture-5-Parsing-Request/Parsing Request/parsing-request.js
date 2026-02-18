const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> Welcome to Home</title></head>");
    res.write("<body>");
    res.write("<h1>Enter your form : </h1>");
    res.write("<form action='/submit-details' method='POST' >");
    res.write("<input type='text' name='name' placeholder='Ente your name '>");
    res.write("<label for='gender'> Gender : </label> ");
    res.write("<input type='radio' name='gender' id='male' value='male'> Male");
    res.write("<input type='radio' name='gender' id='female' value='female'> Female");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    
  } else if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params =  new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, value] of params.entries()) {
      //   bodyObject[key] = value;
      // }
      const bodyObject = Object.fromEntries(params); //Another way
      console.log(bodyObject);
      fs.writeFileSync('user.text', JSON.stringify(bodyObject));
    });


    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello World</title></head>");
  res.write("<h1>Hello World</h1>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;