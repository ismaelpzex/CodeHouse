let http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.end('hola server!');
});

server.listen(3000);