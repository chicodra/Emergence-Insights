/**
 * EtudeDeCas model events
 */

'use strict';

import {EventEmitter} from 'events';
import EtudeDeCas from './etude_de_cas.model';
var EtudeDeCasEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EtudeDeCasEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  EtudeDeCas.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    EtudeDeCasEvents.emit(event + ':' + doc._id, doc);
    EtudeDeCasEvents.emit(event, doc);
  };
}

export default EtudeDeCasEvents;
