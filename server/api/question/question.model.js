'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var QuestionSchema = new mongoose.Schema({
  _id : Number,
  titre : String,
  id_interview : {
    type : Number,
    ref: 'Interview'
  }
});
QuestionSchema.plugin(autoIncrement.plugin, 'Question');
export default mongoose.model('Question', QuestionSchema);
