'use strict';

import mongoose from 'mongoose';

var ActualiteSchema = new mongoose.Schema({
  _id : Number,
  contenu : String,
  sujet : String,
  image : String
});

export default mongoose.model('Actualite', ActualiteSchema);
