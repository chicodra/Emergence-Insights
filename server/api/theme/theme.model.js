'use strict';

import mongoose from 'mongoose';

var ThemeSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Theme', ThemeSchema);
