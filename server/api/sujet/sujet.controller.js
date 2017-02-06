/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/sujets              ->  index
 * POST    /api/sujets              ->  create
 * GET     /api/sujets/:id          ->  show
 * PUT     /api/sujets/:id          ->  upsert
 * PATCH   /api/sujets/:id          ->  patch
 * DELETE  /api/sujets/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Sujet from './sujet.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function (entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch (err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Sujets
export function index(req, res) {
  return Sujet.find().populate('id_user')
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Sujet from the DB
export function show(req, res) {
  return Sujet.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//Get Sujet By Catégorie

export function getSujetByCategorie(req, res) {
  return Sujet.find({ id_cat: req.params.id }).populate('id_user')
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Get Sujet By Nom
export function getSujetByNom(req, res) {
  return Sujet.find({ titre: req.params.id }).populate('id_user')
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Get subjects by one user
export function getSujetByUser(req, res) {
  return Sujet.find({ id_user: req.params.id }).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Creates a new Sujet in the DB
export function create(req, res) {
  return Sujet.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Sujet in the DB at the specified ID
export function upsert(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Sujet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Sujet in the DB
export function patch(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Sujet.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Sujet from the DB
export function destroy(req, res) {
  return Sujet.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
