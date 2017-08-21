'use strict';
var http = require('http');
var port = process.env.PORT || 80;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World Demo for Deploying NodeJs Container App to Linux App-Service with Slot (amaljg-patch-1)');
}).listen(port);
