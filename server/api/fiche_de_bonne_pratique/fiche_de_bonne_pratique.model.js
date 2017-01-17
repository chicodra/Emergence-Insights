'use strict';

import mongoose from 'mongoose';

var FicheDeBonnePratiqueSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('FicheDeBonnePratique', FicheDeBonnePratiqueSchema);
