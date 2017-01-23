'use strict';

import mongoose from 'mongoose';

var QuestionSchema = new mongoose.Schema({
  _id : Number,
  titre : String,
  id_interview : {
    type : Number,
    ref: 'Interview'
  }
});

export default mongoose.model('Question', QuestionSchema);
