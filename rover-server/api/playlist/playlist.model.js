'use strict';

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

var PlaylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slides: [{
    slideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Slide'
    },
    duration: Number
  }],
  timestamp: {
    type: Date,
    default: Date.now
  },
  version: Number
});

export default mongoose.model('Playlist', PlaylistSchema);
