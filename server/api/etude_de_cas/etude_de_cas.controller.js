/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/etude_de_cass              ->  index
 * POST    /api/etude_de_cass              ->  create
 * GET     /api/etude_de_cass/:id          ->  show
 * PUT     /api/etude_de_cass/:id          ->  upsert
 * PATCH   /api/etude_de_cass/:id          ->  patch
 * DELETE  /api/etude_de_cass/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import EtudeDeCas from './etude_de_cas.model';

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

// Gets a list of EtudeDeCass
export function index(req, res) {
  return EtudeDeCas.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//Gets Numbers Of Etude de Cas

export function GetDocumentSize(req, res) {
  return EtudeDeCas.find().count()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single EtudeDeCas from the DB
export function show(req, res) {
  return EtudeDeCas.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new EtudeDeCas in the DB
export function create(req, res) {
  return EtudeDeCas.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

//getEtudeDeCasByTheme

export function getEtudeDeCasByTheme(req, res){
   return EtudeDeCas.find({id_theme:req.params.id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//getEtudeDeCasByPartie
export function getEtudeDeCasByPartie(req, res){
   return EtudeDeCas.find({id_partie:req.params.id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Upserts the given EtudeDeCas in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return EtudeDeCas.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing EtudeDeCas in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return EtudeDeCas.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a EtudeDeCas from the DB
export function destroy(req, res) {
  return EtudeDeCas.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
