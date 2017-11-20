'use strict';

const express = require('express');
const controller = require('./playlist.controller');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({'test':'testing'});
});
// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.upsert);
// router.patch('/:id', controller.patch);
// router.delete('/:id', controller.destroy);

module.exports = router;
