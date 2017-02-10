'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var ArticleSchema = new mongoose.Schema({
  _id: Number,
  titre : String,
  contenu: String,
  id_theme: {
    type : Number,
    ref : 'Theme'
  },
  image : String,
  auteur : String,
  une: Boolean,
  date_publication : String
});
ArticleSchema.plugin(autoIncrement.plugin, 'Article');
export default mongoose.model('Article', ArticleSchema);
