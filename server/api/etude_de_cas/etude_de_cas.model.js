'use strict';

import mongoose from 'mongoose';

var EtudeDeCasSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('EtudeDeCas', EtudeDeCasSchema);
