'use strict';

import mongoose from 'mongoose';

var NotificationSchema = new mongoose.Schema({
  _id: Number,
   id_message : {
    type : Number,
    ref :'Message'
  },
  date_Envoi: Date,
  seen: Boolean
});

export default mongoose.model('Notification', NotificationSchema);
