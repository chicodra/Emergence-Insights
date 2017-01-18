/**
 * PartieTheme model events
 */

'use strict';

import {EventEmitter} from 'events';
import PartieTheme from './partie_theme.model';
var PartieThemeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PartieThemeEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  PartieTheme.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PartieThemeEvents.emit(event + ':' + doc._id, doc);
    PartieThemeEvents.emit(event, doc);
  };
}

export default PartieThemeEvents;
