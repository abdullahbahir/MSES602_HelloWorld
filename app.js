const http = require('http');

const hostname = '127.0.0.1';
const port = 8082;

const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
<<<<<<< HEAD
	  res.end('Hello World. My name is Abdullah Bahir');
=======
	  res.end('Hello World. My name is Vincent Danhd23');
>>>>>>> 83899c382d0fbdfc2270c00e3ab5d71e6ec4292c
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
});

