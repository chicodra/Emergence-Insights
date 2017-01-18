/**
 * FicheActualite model events
 */

'use strict';

import {EventEmitter} from 'events';
import FicheActualite from './fiche_actualite.model';
var FicheActualiteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FicheActualiteEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  FicheActualite.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    FicheActualiteEvents.emit(event + ':' + doc._id, doc);
    FicheActualiteEvents.emit(event, doc);
  };
}

export default FicheActualiteEvents;
