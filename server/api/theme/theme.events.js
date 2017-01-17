/**
 * Theme model events
 */

'use strict';

import {EventEmitter} from 'events';
import Theme from './theme.model';
var ThemeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ThemeEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Theme.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ThemeEvents.emit(event + ':' + doc._id, doc);
    ThemeEvents.emit(event, doc);
  };
}

export default ThemeEvents;
