'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var PartieThemeSchema = new mongoose.Schema({
  _id : Number,
  libelle : String,
  section_dintro : String,
  id_theme :{
    type : Number,
    ref : 'Theme'
  }
});
PartieThemeSchema.plugin(autoIncrement.plugin, 'PartieTheme');
export default mongoose.model('PartieTheme', PartieThemeSchema);
