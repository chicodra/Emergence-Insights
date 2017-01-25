/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/messages              ->  index
 * POST    /api/messages              ->  create
 * GET     /api/messages/:id          ->  show
 * PUT     /api/messages/:id          ->  upsert
 * PATCH   /api/messages/:id          ->  patch
 * DELETE  /api/messages/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Message from './message.model';

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

function verify(tab, element) {
  for (var i in tab) {
    if (tab[i].id == element.id) {
      return true;
    }
  }
  return false;

}

function verifys(tab, element) {
  if (tab == element.id) {
    return true;
  }

  return false;

}

function verif(tab, element) {
  for (var i in tab) {
    if (tab[i].toString() == element.toString()) {
      return true;
    }
  }
  return false;

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

// Gets a list of Messages
export function index(req, res) {
  return Message.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Message from the DB
export function show(req, res) {
  return Message.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Get messages by one subject
export function getMessageBySujet(req, res) {
  return Message.find({ id_sujet: req.params.id }).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Get messages by one user
export function getMessageByUser(req, res) {
  return Message.find({ id_user: req.params.id }).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Creates a new Message in the DB
export function create(req, res) {
  return Message.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

//get User By Sujet
export function getUserBySujet(req, res) {
  Message.find({ id_sujet: req.params.id }).populate('id_user')
    .exec(function (err, users) {
      if (err) { return handleError(res, err); }
      var lesusers = [];
      users.forEach(function (userss) {
        if (!verifys(req.params.us, userss.id_user)) {
          if (lesusers.length != 0) {
            if (!verify(lesusers, userss.id_user))
              lesusers.push(userss.id_user);
          }
          else {
            lesusers.push(userss.id_user);
          }
        }
      });
      return res.json(lesusers);
    })
}


export function getCreatorBysujet(req, res) {
  Message.find({ id_sujet: req.params.id })
    .exec(function (err, messages) {
      if (err) { return handleError(res, err); }

      var lesus = [];
      var test;
      messages.forEach(function (element) {
        if (lesus.length != 0) {
            if (!verify(lesus, element.id_user))
              lesus.push(element.id_user);
          }
          else {
            lesus.push(element.id_user);
          }
        test = element.id_createur;
      });
    
      if (!verif(lesus, test)) {
        return res.json('0').end();
      } else {
        return res.json('1').end();
      }
    })
}


// Upserts the given Message in the DB at the specified ID
export function upsert(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Message.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Message in the DB
export function patch(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Message.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Message from the DB
export function destroy(req, res) {
  return Message.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
