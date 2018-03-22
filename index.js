const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'})
    res.write(JSON.stringify({name: 'abc', lname: 'xyz'}))
    res.end()
}).listen(8285)

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'})
    res.write(JSON.stringify({name: 'abc', lname: 'xyz', food: ['yummy', 'even more yummy']}))
    res.end()
}).listen(8286)