'use strict';

import mongoose from 'mongoose';

var InterviewSchema = new mongoose.Schema({
  libelle: String,
  intervenant: String,
  contenu:String,
   id_theme:{
    type : Number,
    ref : 'Theme'
  },
  active: Boolean
});

export default mongoose.model('Interview', InterviewSchema);
