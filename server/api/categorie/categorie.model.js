'use strict';

import mongoose from 'mongoose';

var CategorieSchema = new mongoose.Schema({
  _id: Number,
  nom: String,
  active: Boolean
});

export default mongoose.model('Categorie', CategorieSchema);
