'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var InterviewSchema = new mongoose.Schema({
  _id : Number,
  libelle: String,
  intervenant: String,
  contenu:String,
   id_theme:{
    type : Number,
    ref : 'Theme'
  },
  image: String,
  active: Boolean
});
InterviewSchema.plugin(autoIncrement.plugin, 'Interview');
export default mongoose.model('Interview', InterviewSchema);
