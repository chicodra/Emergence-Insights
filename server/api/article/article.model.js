'use strict';

import mongoose from 'mongoose';

var ArticleSchema = new mongoose.Schema({
  contenu: String,
  id_theme: {
    type : Number,
    ref : 'Theme'
  },
  active: Boolean
});

export default mongoose.model('Article', ArticleSchema);
