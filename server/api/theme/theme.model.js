'use strict';

import mongoose from 'mongoose';

var ThemeSchema = new mongoose.Schema({
  _id:  Number,
  libelle: String,
  mot_introduction: String,
  active: Boolean
});

export default mongoose.model('Theme', ThemeSchema);
