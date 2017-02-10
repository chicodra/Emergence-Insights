'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var PresentationSchema = new mongoose.Schema({
  titre: String,
  contenu: String,
  info: String,
  id_slide : {
    type : Number,
    ref :'Slide'
  },
  active: Boolean
});
PresentationSchema.plugin(autoIncrement.plugin, 'Presentation');
export default mongoose.model('Presentation', PresentationSchema);
