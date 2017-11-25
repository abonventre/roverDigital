'use strict';

import path from 'path';
import _ from 'lodash';

console.log(process.env.NODE_ENV);
let config = {
  env: process.env.NODE_ENV,
  seedDB: false,
  mongo: {
   options: {
     db: {
       safe: true
     }
   }
 }
}

module.exports = _.merge(
  config,
  require(`./${process.env.NODE_ENV}.js`) || {});
