/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/documentations              ->  index
 * POST    /api/documentations              ->  create
 * GET     /api/documentations/:id          ->  show
 * PUT     /api/documentations/:id          ->  upsert
 * PATCH   /api/documentations/:id          ->  patch
 * DELETE  /api/documentations/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Documentation from './documentation.model';

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

// Gets a list of Documentations
export function index(req, res) {
  return Documentation.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Documentation from the DB
export function show(req, res) {
  return Documentation.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//get a documentation by a country
export function getDocByPays(req, res) {
  return Documentation.find({id_pays : req.params.id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Creates a new Documentation in the DB
export function create(req, res) {
  return Documentation.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Documentation in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Documentation.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Documentation in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Documentation.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Documentation from the DB
export function destroy(req, res) {
  return Documentation.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
