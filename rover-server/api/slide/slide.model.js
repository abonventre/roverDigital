'use strict';

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

var SlideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: {
      type: String,
      required: true
    },
    fileName: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  version: Number,
  orientation: String,
  size: {
    height: Number,
    width: Number
  }
});

export default mongoose.model('Slide', SlideSchema);
