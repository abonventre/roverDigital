const express = require('express');
const app = express();
const port = 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (client) => {
  client.on('connection', () => console.log('connection established'));
  client.on('event', data => console.log(`Data: ${data}`));
  client.on('disconnect', () => console.log('connected lost.'));
});

app.get('/test', (req, res) => {
  console.log('Send broadcast');
  io.emit('event', 'Test-event');
  res.send('Test Route');
});

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(port, () => console.log(`Server running on ${port}`));
