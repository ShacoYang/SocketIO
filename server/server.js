const path = require('path');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
// console.log(__dirname + '/../public');
// console.log(publicPath);

var app = express();
app.use(express.static(publicPath));
/*
app.listen(3000, function (){
console.log('server is up on port 3000');
})
 */
var server = http.createServer(app);
//configure server with socketIO
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnet', () => {
        console.log('User was disconnected');
    });
});

//app.
server.listen(port, () => {
    console.log('Server is up on ${port}');
});