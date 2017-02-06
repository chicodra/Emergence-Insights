'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var NotificationSchema = new mongoose.Schema({
  _id: Number,
   id_message : {
    type : mongoose.Schema.ObjectId,
    ref :'Message'
  },
  date_Envoi: Date,
  seen: Boolean
});
NotificationSchema.plugin(autoIncrement.plugin, 'Notification')
export default mongoose.model('Notification', NotificationSchema);
