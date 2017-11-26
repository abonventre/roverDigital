'use strict';

const path = require('path');

export default function(app) {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use('/api/playlist', require('./api/playlist'));
  app.use('/api/slide', require('./api/slide'));
  app.use('/api/client', require('./api/client'));
}
