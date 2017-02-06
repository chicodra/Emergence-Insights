'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

var SousCategorieSchema = new mongoose.Schema({
  _id : Number,
  titre : String,
  description : String,
  id_categorie : {
    type : Number,
    ref : 'Categorie'
  }
});

SousCategorieSchema.plugin(autoIncrement.plugin, 'SousCategorie')
export default mongoose.model('SousCategorie', SousCategorieSchema);
