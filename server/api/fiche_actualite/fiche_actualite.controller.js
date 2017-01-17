/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/fiche_actualites              ->  index
 * POST    /api/fiche_actualites              ->  create
 * GET     /api/fiche_actualites/:id          ->  show
 * PUT     /api/fiche_actualites/:id          ->  upsert
 * PATCH   /api/fiche_actualites/:id          ->  patch
 * DELETE  /api/fiche_actualites/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import FicheActualite from './fiche_actualite.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of FicheActualites
export function index(req, res) {
  return FicheActualite.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single FicheActualite from the DB
export function show(req, res) {
  return FicheActualite.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
//get an actuality by country
export function getActByPays(req, res) {
  FicheActualite.find({id_pays : req.params.id}).populate('id_actualite')
  .exec(function(err,actualites){
    if(err) { return handleError(res, err); }
     var lesActus = [];
    actualites.forEach(function(actu) {
       
            lesActus.push(actu.id_actualite);
       
    });
    return res.json(lesActus);
  })
}


// Creates a new FicheActualite in the DB
export function create(req, res) {
  return FicheActualite.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given FicheActualite in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return FicheActualite.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing FicheActualite in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return FicheActualite.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a FicheActualite from the DB
export function destroy(req, res) {
  return FicheActualite.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
