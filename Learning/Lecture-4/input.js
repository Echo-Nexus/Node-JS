const http = require("http");
const server = http.createServer((req, res) => {
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
    return res.write("</html>");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello World</title></head>");
  res.write("<h1>Hello World</h1>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
