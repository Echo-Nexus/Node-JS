const sumHandler = (req, res) => {
  const body = [];

  req.on('data', (chunk) => {
    body.push(chunk);
  });

  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const num1Value = params.get('num1');
    const num2Value = params.get('num2');

    const n1 = Number(num1Value);
    const n2 = Number(num2Value);

    res.setHeader('Content-Type', 'text/html');
    
    const sum = n1 + n2;
    return res.end(`
      <h1>The sum of ${n1} and ${n2} is : ${sum}</h1>
      <a href='/calculator'>Go back to calculator</a>
    `);
  });
};

module.exports = sumHandler;
