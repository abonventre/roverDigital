'use strict';

import mongoose from 'mongoose';

var PlaylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slides: [{
    slideId: ObjectId,
    duration: Number
  }],
  timestamp: {
    type: Date,
    default: Date.now
  },
  version: Number
});

export default mongoose.model('Playlist', PlaylistSchema);
