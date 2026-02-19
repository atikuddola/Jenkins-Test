const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Version 4.3 has been released!");
});

server.listen(3000);
