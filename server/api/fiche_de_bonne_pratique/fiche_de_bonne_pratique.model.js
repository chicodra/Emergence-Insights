'use strict';

import mongoose from 'mongoose';

var FicheDeBonnePratiqueSchema = new mongoose.Schema({
  contenu: String,
  id_theme: Number,
  active: Boolean
});

export default mongoose.model('FicheDeBonnePratique', FicheDeBonnePratiqueSchema);
