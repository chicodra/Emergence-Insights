'use strict';

import mongoose from 'mongoose';

var SujetSchema = new mongoose.Schema({
  _id : Number,
  titre : String,
  id_user : {
    type : mongoose.Schema.ObjectId,
    ref: 'User'
  },
  date_creation : Date
});

export default mongoose.model('Sujet', SujetSchema);