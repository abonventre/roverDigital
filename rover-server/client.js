const express = require('express');
const rover = 'http://localhost:3000';
const app = express();
const path = require('path');
const port = 3010;
const server = require('http').createServer(app);
const socket = require('socket.io-client')(rover);
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/roverDigital-client');
mongoose.connection.on('error', function(err) {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

console.log(path.join(__dirname, 'src'));

require('./routes').default(app);

app.use('/', express.static(path.join(__dirname, '../rover-app/src')));
app.use('/', express.static(path.join(__dirname, '../rover-app/client-config')));
// app.get('/', (req, res) => res.send('Welcome to the roverDigital Client'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../rover-app/src/index.html'));
});

socket.on('connect', () => console.log('connected'));
socket.on('event', data => console.log(`Data: ${data}`));
socket.on('disconnect', () => console.log('disconnect'));

server.listen(port, () => console.log(`Server running on ${port}`));
