  
        
const http = require('http');
const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
    const src = fs.createReadStream('th.jpg').pipe(res);
});
server.listen(3000, () => console.log('Server is running'));
    
        
        
        