'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var EtudeDeCasSchema = new mongoose.Schema({
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
EtudeDeCasSchema.plugin(autoIncrement.plugin, 'EtudeDeCas');
export default mongoose.model('EtudeDeCas', EtudeDeCasSchema);
