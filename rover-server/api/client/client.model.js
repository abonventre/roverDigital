'use strict';

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

var ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  schedule: [{
    playlistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Playlist'
    },
    startDate: Date,
    endDate: Date,
    startTime: Number, //Seconds from 00:00:00
    endTime: Number //Seconds from 00:00:00
  }],
  timestamp: {
    type: Date,
    default: Date.now
  },
  version: Number
});

export default mongoose.model('Client', ClientSchema);
