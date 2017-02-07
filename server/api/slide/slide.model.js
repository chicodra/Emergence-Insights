'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var SlideSchema = new mongoose.Schema({
  _id : Number,
  image: String,
  active: Boolean
});
SlideSchema.plugin(autoIncrement.plugin, 'Slide');
export default mongoose.model('Slide', SlideSchema);
