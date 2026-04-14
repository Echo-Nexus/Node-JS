const sumReqHandler = (req, res) => {
  const body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const jsonData = {};
    for ( const [key, val] of params.entries()) {
      jsonData[key] = val;
    }
    const sum = Number(jsonData['num1']) + Number(jsonData['num2']);
    res.setHeader('Content-Type', 'text/html');
    return res.end(`
      <h1> The sum of ${jsonData['num1']} and ${jsonData['num2']} is : ${sum} </h1>
      <a href='/calculator'> Go back to calculator</a>
    `);
  });
};

module.exports = sumReqHandler;