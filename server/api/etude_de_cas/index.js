'use strict';

var express = require('express');
var controller = require('./etude_de_cas.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/nombre', controller.GetDocumentSize);
router.get('/:id', controller.show);
router.get('/theme/:id',controller.getEtudeDeCasByTheme);
router.get('/partie/:id',controller.getEtudeDeCasByPartie);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
