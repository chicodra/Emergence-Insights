'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var CategorieSchema = new mongoose.Schema({
  _id: Number,
  nom: String,
  active: Boolean
});
CategorieSchema.plugin(autoIncrement.plugin, 'Categorie')
export default mongoose.model('Categorie', CategorieSchema);
