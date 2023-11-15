const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  
  const imagePath = path.join(__dirname, 'th.jpg');

    fs.readFile(imagePath, (error, data) => {
    if (error) {
      
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data, 'binary');
    }
  });
});


server.listen(3000, () => console.log('Server is running'));
