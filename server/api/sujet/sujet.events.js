/**
 * Sujet model events
 */

'use strict';

import {EventEmitter} from 'events';
import Sujet from './sujet.model';
var SujetEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SujetEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Sujet.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SujetEvents.emit(event + ':' + doc._id, doc);
    SujetEvents.emit(event, doc);
  };
}

export default SujetEvents;
