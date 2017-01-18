/**
 * FicheDeBonnePratique model events
 */

'use strict';

import {EventEmitter} from 'events';
import FicheDeBonnePratique from './fiche_de_bonne_pratique.model';
var FicheDeBonnePratiqueEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FicheDeBonnePratiqueEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  FicheDeBonnePratique.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    FicheDeBonnePratiqueEvents.emit(event + ':' + doc._id, doc);
    FicheDeBonnePratiqueEvents.emit(event, doc);
  };
}

export default FicheDeBonnePratiqueEvents;
