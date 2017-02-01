/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/actualites              ->  index
 * POST    /api/actualites              ->  create
 * GET     /api/actualites/:id          ->  show
 * PUT     /api/actualites/:id          ->  upsert
 * PATCH   /api/actualites/:id          ->  patch
 * DELETE  /api/actualites/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Actualite from './actualite.model';

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

// Gets a list of Actualites
export function index(req, res) {
  return Actualite.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Actualite from the DB
export function show(req, res) {
  return Actualite.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Actualite bu sujet
export function getActuBySujet(req, res) {
  return Actualite.find({sujet : req.params.suj}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//get a Actu if its a la une
export function getActuByUne(req, res) {
  return Actualite.find({une : req.params.true}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Actualite in the DB
export function create(req, res) {
  return Actualite.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Actualite in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Actualite.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Actualite in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Actualite.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Actualite from the DB
export function destroy(req, res) {
  return Actualite.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
