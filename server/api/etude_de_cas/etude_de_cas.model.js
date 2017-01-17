'use strict';

import mongoose from 'mongoose';

var EtudeDeCasSchema = new mongoose.Schema({
  contenu: String,
  id_theme: Number,
  active: Boolean
});

export default mongoose.model('EtudeDeCas', EtudeDeCasSchema);
