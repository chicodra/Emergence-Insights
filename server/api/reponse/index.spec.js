'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var reponseCtrlStub = {
  index: 'reponseCtrl.index',
  show: 'reponseCtrl.show',
  create: 'reponseCtrl.create',
  upsert: 'reponseCtrl.upsert',
  patch: 'reponseCtrl.patch',
  destroy: 'reponseCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var reponseIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './reponse.controller': reponseCtrlStub
});

describe('Reponse API Router:', function() {
  it('should return an express router instance', function() {
    reponseIndex.should.equal(routerStub);
  });

  describe('GET /api/reponses', function() {
    it('should route to reponse.controller.index', function() {
      routerStub.get
        .withArgs('/', 'reponseCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/reponses/:id', function() {
    it('should route to reponse.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'reponseCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/reponses', function() {
    it('should route to reponse.controller.create', function() {
      routerStub.post
        .withArgs('/', 'reponseCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/reponses/:id', function() {
    it('should route to reponse.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'reponseCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/reponses/:id', function() {
    it('should route to reponse.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'reponseCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/reponses/:id', function() {
    it('should route to reponse.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'reponseCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
