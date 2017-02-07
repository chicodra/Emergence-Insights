'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var PaysSchema = new mongoose.Schema({
  _id : Number,
  nom : String,
  image : String,
  drapeau: String,
  description : String
 
});
PaysSchema.plugin(autoIncrement.plugin, 'Pays');
export default mongoose.model('Pays', PaysSchema);
