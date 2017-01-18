'use strict';

var express = require('express');
var controller = require('./message.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/sujet/:id', controller.getMessageBySujet);
router.get('/user/:id', controller.getMessageByUser);
router.get('/usersujet/:id/:us', controller.getUserBySujet);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
