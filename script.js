




// 2) Веб сервер, при відкриванні виводиться інформація про студента.

const http = require('http');
const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html')
  res.end(' <p> Hello, world! </p>');
});
server.listen(port, hostname, ()=> {
    console.log('running');
});

**
  
  
