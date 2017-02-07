'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
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
FicheActualiteSchema.plugin(autoIncrement.plugin, 'FicheActualite');
export default mongoose.model('FicheActualite', FicheActualiteSchema);
