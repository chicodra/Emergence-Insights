'use strict';

import mongoose from 'mongoose';

var ReponseSchema = new mongoose.Schema({
  _id : Number,
  libelle : String,
  id_question : {
    type : Number,
    ref : 'Question'
  }
});

export default mongoose.model('Reponse', ReponseSchema);
