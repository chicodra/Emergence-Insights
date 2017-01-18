'use strict';

import mongoose from 'mongoose';

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

export default mongoose.model('FicheDeBonnePratique', FicheDeBonnePratiqueSchema);
