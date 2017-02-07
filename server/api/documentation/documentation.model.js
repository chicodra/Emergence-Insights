'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DocumentationSchema = new mongoose.Schema({
  _id : Number,
  libelle : String,
  contenu : String,
  id_pays : {
    type : Number,
    ref : 'Pays'
  }
});
DocumentationSchema.plugin(autoIncrement.plugin, 'Documentation');
export default mongoose.model('Documentation', DocumentationSchema);
