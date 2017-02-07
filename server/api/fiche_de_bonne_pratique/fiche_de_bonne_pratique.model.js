'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var FicheDeBonnePratiqueSchema = new mongoose.Schema({
  contenu: String,
  id_theme:{
    type : Number,
    ref : 'Theme'
  },
  id_partie : {
    type : Number,
    ref : 'PartieTheme'
  }
});
FicheDeBonnePratiqueSchema.plugin(autoIncrement.plugin, 'FicheDeBonnePratique');
export default mongoose.model('FicheDeBonnePratique', FicheDeBonnePratiqueSchema);
