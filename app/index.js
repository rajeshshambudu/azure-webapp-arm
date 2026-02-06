const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from STAGING slot via Azure DevOps Pipeline!');
});

server.listen(process.env.PORT || 3000);
