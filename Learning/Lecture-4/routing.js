const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> Welcome to Home</title></head>");
    res.write("<h1>Welcome to digital world</h1>");
    return res.write("</html>");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>About Us</title></head>");
    res.write("<h1> Hi, I am Komal Chaudhary..../h1>");
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
