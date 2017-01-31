'use strict';

import mongoose from 'mongoose';

var ArticleSchema = new mongoose.Schema({

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

export default mongoose.model('Article', ArticleSchema);
