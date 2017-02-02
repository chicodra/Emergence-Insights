'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var SujetSchema = new mongoose.Schema({
  _id : Number,
  titre : String,
  id_user : {
    type : mongoose.Schema.ObjectId,
    ref: 'User'
  },
  date_creation : Date
});

SujetSchema.plugin(autoIncrement.plugin, 'Sujet');

export default mongoose.model('Sujet', SujetSchema);