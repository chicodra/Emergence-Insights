/**
 * Documentation model events
 */

'use strict';

import {EventEmitter} from 'events';
import Documentation from './documentation.model';
var DocumentationEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DocumentationEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Documentation.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DocumentationEvents.emit(event + ':' + doc._id, doc);
    DocumentationEvents.emit(event, doc);
  };
}

export default DocumentationEvents;
