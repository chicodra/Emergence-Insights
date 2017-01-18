'use strict';

import mongoose from 'mongoose';

var PartieThemeSchema = new mongoose.Schema({
  _id : Number,
  libelle : String,
  section_dintro : String,
  id_theme :{
    type : Number,
    ref : 'Theme'
  }
});

export default mongoose.model('PartieTheme', PartieThemeSchema);
