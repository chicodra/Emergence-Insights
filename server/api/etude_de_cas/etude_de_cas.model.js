'use strict';

import mongoose from 'mongoose';

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

export default mongoose.model('EtudeDeCas', EtudeDeCasSchema);
