const express = require('express');
const rover = 'http://localhost:3000';
const app = express();
const path = require('path');
const port = 3010;
const server = require('http').createServer(app);
const socket = require('socket.io-client')(rover);
const mongoose = require('mongoose');

import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

mongoose.connect('mongodb://localhost/roverDigital');

console.log(path.join(__dirname,  '../client'));

app.use('/static', express.static(path.join(__dirname, '../client')));
app.get('/', (req, res) => res.send('Welcomes to the roverDigital Client'));


socket.on('connect', () => console.log('connected'));
socket.on('event', data => console.log(`Data: ${data}`));
socket.on('disconnect', () => console.log('disconnect'));

server.listen(port, () => console.log(`Server running on ${port}`));
