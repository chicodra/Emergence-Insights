'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var ReponseSchema = new mongoose.Schema({
  _id : Number,
  libelle : String,
  id_question : {
    type : Number,
    ref : 'Question'
  }
});
ReponseSchema.plugin(autoIncrement.plugin, 'Reponse');
export default mongoose.model('Reponse', ReponseSchema);
