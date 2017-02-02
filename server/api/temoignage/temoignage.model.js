'use strict';

import mongoose from 'mongoose';

var TemoignageSchema = new mongoose.Schema({
  titre: String,
  contenu: String,
  images: String,
  active: Boolean
});

export default mongoose.model('Temoignage', TemoignageSchema);
