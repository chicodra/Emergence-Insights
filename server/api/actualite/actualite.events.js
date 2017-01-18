/**
 * Actualite model events
 */

'use strict';

import {EventEmitter} from 'events';
import Actualite from './actualite.model';
var ActualiteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ActualiteEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Actualite.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ActualiteEvents.emit(event + ':' + doc._id, doc);
    ActualiteEvents.emit(event, doc);
  };
}

export default ActualiteEvents;
