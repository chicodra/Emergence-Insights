'use strict';

import mongoose from 'mongoose';

var ArticleSchema = new mongoose.Schema({

  titre : String,
  contenu: String,
  id_theme: {
    type : Number,
    ref : 'Theme'
  },
  image : String
});

export default mongoose.model('Article', ArticleSchema);
