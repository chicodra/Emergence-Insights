'use strict';

import mongoose from 'mongoose';

var PaysSchema = new mongoose.Schema({
  _id : Number,
  nom : String,
  image : String,
  drapeau: String,
  description : String
 
});

export default mongoose.model('Pays', PaysSchema);
