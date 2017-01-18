'use strict';

import mongoose from 'mongoose';

var AgendaSchema = new mongoose.Schema({
  _id : Number,
  contenu : String,
  id_pays : {
    type : Number,
    ref : 'Pays'
  }
});

export default mongoose.model('Agenda', AgendaSchema);
