const express = require('express');
const app = express();

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});
const ioServer = require('socket.io')(server);

ioServer.on('connection', function(socket) {
    socket.on('SEND_MESSAGE', function(data) {
          console.log(data + "00")
       ioServer.emit('MESSAGE', data)
    });
});

var ioClient = require('socket.io-client')('http://localhost:3001');
console.log("ну строка опять")
ioClient.emit('SEND_MESSAGE', 'строк');
       