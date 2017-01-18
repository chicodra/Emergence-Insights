'use strict';

import mongoose from 'mongoose';

var FicheActualiteSchema = new mongoose.Schema({
  _id : Number,
  id_pays : {
    type : Number,
    ref : 'Pays'
  },
  id_actualite : {
    type : Number,
    ref :'Actualite'
  },
  date : Date
});

export default mongoose.model('FicheActualite', FicheActualiteSchema);
