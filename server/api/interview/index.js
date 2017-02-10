'use strict';

var express = require('express');
var controller = require('./interview.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/theme/:id', controller.getInterviewByTheme);
router.get('/themes/:id', controller.getInterviewByName);
router.get('/nombre',controller.GetInterviewSize);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
