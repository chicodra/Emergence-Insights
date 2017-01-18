/**
 * Interview model events
 */

'use strict';

import {EventEmitter} from 'events';
import Interview from './interview.model';
var InterviewEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
InterviewEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Interview.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    InterviewEvents.emit(event + ':' + doc._id, doc);
    InterviewEvents.emit(event, doc);
  };
}

export default InterviewEvents;
