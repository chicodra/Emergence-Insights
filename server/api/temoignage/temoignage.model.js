'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var TemoignageSchema = new mongoose.Schema({
  titre: String,
  contenu: String,
  images: String,
  active: Boolean
});
TemoignageSchema.plugin(autoIncrement.plugin, 'Temoignage');
export default mongoose.model('Temoignage', TemoignageSchema);
