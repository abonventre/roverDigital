/**
 * Populate DB with sample data on server start for dev server
 */

'use strict';

import Playlist from '../api/playlist/playlist.model';
import Slide from '../api/slide/slide.model';

import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

Slide.find({}).remove()
  .then(() => {
    Slide.create({
      "_id": new ObjectId("54cd6669d3e0fb1b302e54e6"),
      "name": "sunset",
      "content": {
        "type": "image",
        "fileName": "assets/img/rocks.jpg"
      },
      "version": 1,
      "orientation": "landscape",
      "size": {
        "height": 1080,
        "width": 1920
      }
    },
    {
      "_id": new ObjectId("54cd6669d3e0fb1b302e54e4"),
      "name": "FIWT",
      "content": {
        "type": "image",
        "fileName": "assets/img/yosemite.jpg"
      },
      "version": 1,
      "orientation": "landscape",
      "size": {
        "height": 1080,
        "width": 1920
      }
    },
    {
      "_id": new ObjectId("54cd6669d3e0fb1b302e54e8"),
      "name": "FI",
      "content": {
        "type": "image",
        "fileName": "assets/img/flowers.jpg"
      },
      "version": 1,
      "orientation": "landscape",
      "size": {
        "height": 1080,
        "width": 1920
      }
    });
  });

Playlist.find({}).remove()
  .then(() => {
    Playlist.create({
      "_id": new ObjectId("54cd6669d3e0fb1b302e54e6"),
      "name": "Main Terminal",
      "slides": [
        {
          "slideId": ObjectId("54cd6669d3e0fb1b302e54e6"),
          "duration": 5000
        },
        {
          "slideId": ObjectId("54cd6669d3e0fb1b302e54e4"),
          "duration": 6000
        },
        {
          "slideId": ObjectId("54cd6669d3e0fb1b302e54e8"),
          "duration": 7000
        }
      ],
      "version": 1
    });
  });
