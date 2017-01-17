'use strict';

import mongoose from 'mongoose';

var ArticleSchema = new mongoose.Schema({
  name: String,
  id_theme: Number,
  active: Boolean
});

export default mongoose.model('Article', ArticleSchema);
