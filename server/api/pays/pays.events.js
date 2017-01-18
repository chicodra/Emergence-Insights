/**
 * Pays model events
 */

'use strict';

import {EventEmitter} from 'events';
import Pays from './pays.model';
var PaysEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PaysEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Pays.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PaysEvents.emit(event + ':' + doc._id, doc);
    PaysEvents.emit(event, doc);
  };
}

export default PaysEvents;
