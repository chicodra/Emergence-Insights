/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/reponses              ->  index
 * POST    /api/reponses              ->  create
 * GET     /api/reponses/:id          ->  show
 * PUT     /api/reponses/:id          ->  upsert
 * PATCH   /api/reponses/:id          ->  patch
 * DELETE  /api/reponses/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Reponse from './reponse.model';

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

// Gets a list of Reponses
export function index(req, res) {
  return Reponse.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Reponse from the DB
export function show(req, res) {
  return Reponse.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//get responses by a questions
export function getResByQuest(req, res) {
  return Reponse.find({id_question : req.params.id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Reponse in the DB
export function create(req, res) {
  return Reponse.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Reponse in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Reponse.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Reponse in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Reponse.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Reponse from the DB
export function destroy(req, res) {
  return Reponse.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
