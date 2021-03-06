'use strict';

var express = require('express');
var controller = require('./sousCategorie.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/cat/:cat', controller.getSousByCat);
router.get('/nom/:nom', controller.getSousByNom);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
