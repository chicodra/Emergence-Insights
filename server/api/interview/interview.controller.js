/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/interviews              ->  index
 * POST    /api/interviews              ->  create
 * GET     /api/interviews/:id          ->  show
 * PUT     /api/interviews/:id          ->  upsert
 * PATCH   /api/interviews/:id          ->  patch
 * DELETE  /api/interviews/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Interview from './interview.model';

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

// Gets a list of Interviews
export function index(req, res) {
  return Interview.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Interview from the DB
export function show(req, res) {
  return Interview.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//getInterviewByName

export function getInterviewByName(req, res){
   return Interview.find({libelle:req.params.id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Interview in the DB
export function create(req, res) {
  return Interview.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

//getInterviewByTheme

export function getInterviewByTheme(req, res){
   return Interview.find({id_theme:req.params.id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Upserts the given Interview in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Interview.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Interview in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Interview.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Interview from the DB
export function destroy(req, res) {
  return Interview.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
