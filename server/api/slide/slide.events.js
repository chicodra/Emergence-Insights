/**
 * Slide model events
 */

'use strict';

import {EventEmitter} from 'events';
import Slide from './slide.model';
var SlideEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SlideEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Slide.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SlideEvents.emit(event + ':' + doc._id, doc);
    SlideEvents.emit(event, doc);
  };
}

export default SlideEvents;
