'use strict';

import mongoose from 'mongoose';

var PlaylistSchema = new mongoose.Schema({
  name: String,
  slides: Array
});

export default mongoose.model('Playlist', PlaylistSchema);
