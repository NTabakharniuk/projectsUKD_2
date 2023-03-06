/*
const http = require('http');
const hostname = 'localhost';
const port = 8000;

const server = http.createServer(
function(req, res) {
  res.writeHead(200, {
    'Content-Type' : 'text/plain';
  });
  res.end('Hello');
});
server.listen(port, hostname, funstion() {
    console.log('running');
});


*/

// const http = require('http');
// const hostname = 'localhost';
// const port = 8000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-type', 'text/html')
//   res.end(' <p> Hello, world! </p>');
// });
// server.listen(port, hostname, ()=> {
//     console.log('running');
// });


// const fs = require('fs')
// const http = require('http')
// const hostname = 'localhost';

// const server = http.createServer((req, res) => {
//     fs.readFile('index.html', (err, data) => {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   res.write(data)
//   return res.end()
// })
// })
// server.listen(3000, hostname, () => {
//   console.log('Server started on port 3000')
// })


const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      return res.end('404 Not Found')
    }  
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
})

server.listen(3000, () => {
  console.log('Server started on port 3000')
})
