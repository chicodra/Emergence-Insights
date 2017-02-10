/**
 * Temoignage model events
 */

'use strict';

import {EventEmitter} from 'events';
import Temoignage from './temoignage.model';
var TemoignageEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TemoignageEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Temoignage.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TemoignageEvents.emit(event + ':' + doc._id, doc);
    TemoignageEvents.emit(event, doc);
  };
}

export default TemoignageEvents;
