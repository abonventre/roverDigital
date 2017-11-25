const express = require('express');
const rover = 'http://localhost:3000';
const app = express();
const path = require('path');
const port = 3010;
const server = require('http').createServer(app);
const socket = require('socket.io-client')(rover);
import config from './config/environment';

console.log(config);

console.log(path.join(__dirname, 'src'));

app.use('/static', express.static(path.join(__dirname, '../rover-app/src')));
app.get('/', (req, res) => res.send('Welcome to the roverDigital Client'));


socket.on('connect', () => console.log('connected'));
socket.on('event', data => console.log(`Data: ${data}`));
socket.on('disconnect', () => console.log('disconnect'));

server.listen(port, () => console.log(`Server running on ${port}`));
