'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var ActualiteSchema = new mongoose.Schema({
  _id : Number,
  contenu : String,
  sujet : String,
  image : String,
  une : Boolean
});
ActualiteSchema.plugin(autoIncrement.plugin, 'Actualite');
export default mongoose.model('Actualite', ActualiteSchema);
