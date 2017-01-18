'use strict';

import mongoose from 'mongoose';

var MessageSchema = new mongoose.Schema({
  _id: Number,
  id_user : {
    type : mongoose.Schema.ObjectId,
    ref :'User'
  },
  id_sujet : {
    type : Number,
    ref :'Sujet'
  }, id_createur : {
    type : mongoose.Schema.ObjectId,
    ref :'User'
  },
  contenu: String,
  date_creation: Date
});

export default mongoose.model('Message', MessageSchema);
