'use strict';

import mongoose from 'mongoose';

var ThemeSchema = new mongoose.Schema({
  _id:  Number,
  libelle: String,
  mot_introduction: String,
  active: Boolean,
  link: String
});

export default mongoose.model('Theme', ThemeSchema);
