/**
 * Agenda model events
 */

'use strict';

import {EventEmitter} from 'events';
import Agenda from './agenda.model';
var AgendaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AgendaEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Agenda.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AgendaEvents.emit(event + ':' + doc._id, doc);
    AgendaEvents.emit(event, doc);
  };
}

export default AgendaEvents;
