const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Version 2.2 has been released!");
});

server.listen(3000);
