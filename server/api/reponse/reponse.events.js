/**
 * Reponse model events
 */

'use strict';

import {EventEmitter} from 'events';
import Reponse from './reponse.model';
var ReponseEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ReponseEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Reponse.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ReponseEvents.emit(event + ':' + doc._id, doc);
    ReponseEvents.emit(event, doc);
  };
}

export default ReponseEvents;
