'use strict';

var express = require('express');
var controller = require('./sujet.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/nom/:id', controller.getSujetByNom);
router.get('/categorie/:id',controller.getSujetByCategorie);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
