'use strict';

import mongoose from 'mongoose';

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

export default mongoose.model('Presentation', PresentationSchema);
