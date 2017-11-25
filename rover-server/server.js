const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
import config from './config';

mongoose.connect('mongodb://localhost/roverDigital-server', config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

if(config.seedDB) {
  require('./config/seed');
}

io.on('connection', (client) => {
  client.on('connection', () => console.log('connection established'));
  client.on('event', data => console.log(`Data: ${data}`));
  client.on('disconnect', () => console.log('connected lost.'));
});

require('./routes').default(app);

console.log(path.join(__dirname, '../rover-app/src'));

app.use('/', express.static(path.join(__dirname, '../rover-app/src')));
app.use('/', express.static(path.join(__dirname, '../rover-app/server-config')));
// app.use('*', express.static(path.join(__dirname, '../rover-app/src')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../rover-app/src/index.html'));
});

app.get('/test', (req, res) => {
  console.log('Send broadcast');
  io.emit('event', 'Test-event');
  res.send('Test Route');
});

server.listen(port, () => console.log(`Server running on ${port}`));
