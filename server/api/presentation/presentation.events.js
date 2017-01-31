/**
 * Presentation model events
 */

'use strict';

import {EventEmitter} from 'events';
import Presentation from './presentation.model';
var PresentationEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PresentationEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Presentation.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PresentationEvents.emit(event + ':' + doc._id, doc);
    PresentationEvents.emit(event, doc);
  };
}

export default PresentationEvents;
