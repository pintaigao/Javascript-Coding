const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log(req.url);
  if(req.url.indexOf('error')!==-1){
    throw 'error'
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000);