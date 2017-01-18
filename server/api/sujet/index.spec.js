'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sujetCtrlStub = {
  index: 'sujetCtrl.index',
  show: 'sujetCtrl.show',
  create: 'sujetCtrl.create',
  upsert: 'sujetCtrl.upsert',
  patch: 'sujetCtrl.patch',
  destroy: 'sujetCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sujetIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './sujet.controller': sujetCtrlStub
});

describe('Sujet API Router:', function() {
  it('should return an express router instance', function() {
    sujetIndex.should.equal(routerStub);
  });

  describe('GET /api/sujets', function() {
    it('should route to sujet.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sujetCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/sujets/:id', function() {
    it('should route to sujet.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'sujetCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/sujets', function() {
    it('should route to sujet.controller.create', function() {
      routerStub.post
        .withArgs('/', 'sujetCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/sujets/:id', function() {
    it('should route to sujet.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'sujetCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/sujets/:id', function() {
    it('should route to sujet.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'sujetCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/sujets/:id', function() {
    it('should route to sujet.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'sujetCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
