const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('request hit', req.url);
    res.end('Welcome');
});

server.listen(5000);