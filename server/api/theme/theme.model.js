'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var ThemeSchema = new mongoose.Schema({
  _id:  Number,
  libelle: String,
  mot_introduction: String,
  active: Boolean,
  link: String
});
ThemeSchema.plugin(autoIncrement.plugin, 'Theme');
export default mongoose.model('Theme', ThemeSchema);
