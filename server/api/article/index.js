'use strict';

var express = require('express');
var controller = require('./article.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/theme/:id',controller.getArticleByTheme);
router.get('/titre/:tit', controller.getArticleByTitre);
router.get('/auteur/:aut', controller.getArticleByAuteur);
router.get('/date/:dat', controller.getArticleByDate);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
