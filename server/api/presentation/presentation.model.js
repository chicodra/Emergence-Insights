'use strict';

import mongoose from 'mongoose';

var PresentationSchema = new mongoose.Schema({
  titre: String,
  contenu: String,
  info: String,
  images:String,
  active: Boolean
});

export default mongoose.model('Presentation', PresentationSchema);
