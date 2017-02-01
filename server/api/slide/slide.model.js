'use strict';

import mongoose from 'mongoose';

var SlideSchema = new mongoose.Schema({
  _id : Number,
  image: String,
  active: Boolean
});

export default mongoose.model('Slide', SlideSchema);
