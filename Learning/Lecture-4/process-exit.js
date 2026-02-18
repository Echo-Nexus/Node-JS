const http = require('http');

// function requestListener(req, res) {
//     console.log(req);
// }

// http.createServer(requestListener).listen(3000);

const server = http.createServer((req, res) => {
  process.exit(); // To exit the server
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});