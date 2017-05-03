'use strict';
var http = require('http');
var port = process.env.PORT || 80;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World Demo for Build 2017 - updated from App Service Deploy task : Roopesh - Atul\n');
}).listen(port);
