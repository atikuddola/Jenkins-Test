const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Version 1 🚀");
});

server.listen(3000);
