'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var AgendaSchema = new mongoose.Schema({
  _id : Number,
  contenu : String,
  id_pays : {
    type : Number,
    ref : 'Pays'
  }
});
AgendaSchema.plugin(autoIncrement.plugin, 'Agenda');
export default mongoose.model('Agenda', AgendaSchema);
