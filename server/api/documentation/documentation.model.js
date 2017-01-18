'use strict';

import mongoose from 'mongoose';

var DocumentationSchema = new mongoose.Schema({
  _id : Number,
  libelle : String,
  contenu : String,
  id_pays : {
    type : Number,
    ref : 'Pays'
  }
});

export default mongoose.model('Documentation', DocumentationSchema);
