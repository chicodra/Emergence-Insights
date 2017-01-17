'use strict';

var express = require('express');
var controller = require('./fiche_de_bonne_pratique.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/theme/:id',controller.getFicheDeBonnePratiqueByTheme);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
