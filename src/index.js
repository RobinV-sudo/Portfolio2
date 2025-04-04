// Entry point for the application
const http = require('http');

const hostname = '0.0.0.0'; // Use 0.0.0.0 to allow Heroku to bind to the correct IP
const port = process.env.PORT || 3000; // Use the port provided by Heroku

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Webpack!\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${portfoliorvorstedt-62ec4130af14.herokuapp.com/}:${8080}/`);
});
