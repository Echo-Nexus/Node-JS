const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Request received');
    process.exit(); // Exit the process with a success code
    });
server.listen(3001, () => {
    console.log('Server is listening on port 3000');
});