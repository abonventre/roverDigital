const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/roverDigital-server');
mongoose.connection.on('error', function(err) {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

io.on('connection', (client) => {
  client.on('connection', () => console.log('connection established'));
  client.on('event', data => console.log(`Data: ${data}`));
  client.on('disconnect', () => console.log('connected lost.'));
});

app.use('/static', express.static(path.join(__dirname, '../rover-app/src')));

app.get('/config', (req, res) => {
  res.json({
    'mode': 'server'
  });
});

require('./routes').default(app);

app.get('/test', (req, res) => {
  console.log('Send broadcast');
  io.emit('event', 'Test-event');
  res.send('Test Route');
});

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(port, () => console.log(`Server running on ${port}`));
