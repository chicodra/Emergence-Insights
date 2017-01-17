'use strict';

import mongoose from 'mongoose';

var InterviewSchema = new mongoose.Schema({
  libelle: String,
  auteur: Number,
  contenu:String,
  id_theme: Number,
  active: Boolean
});

export default mongoose.model('Interview', InterviewSchema);
