const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Version 2.1 has been released!");
});

server.listen(3000);
