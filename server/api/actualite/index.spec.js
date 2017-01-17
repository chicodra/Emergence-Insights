'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var actualiteCtrlStub = {
  index: 'actualiteCtrl.index',
  show: 'actualiteCtrl.show',
  create: 'actualiteCtrl.create',
  upsert: 'actualiteCtrl.upsert',
  patch: 'actualiteCtrl.patch',
  destroy: 'actualiteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var actualiteIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './actualite.controller': actualiteCtrlStub
});

describe('Actualite API Router:', function() {
  it('should return an express router instance', function() {
    actualiteIndex.should.equal(routerStub);
  });

  describe('GET /api/actualites', function() {
    it('should route to actualite.controller.index', function() {
      routerStub.get
        .withArgs('/', 'actualiteCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/actualites/:id', function() {
    it('should route to actualite.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'actualiteCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/actualites', function() {
    it('should route to actualite.controller.create', function() {
      routerStub.post
        .withArgs('/', 'actualiteCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/actualites/:id', function() {
    it('should route to actualite.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'actualiteCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/actualites/:id', function() {
    it('should route to actualite.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'actualiteCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/actualites/:id', function() {
    it('should route to actualite.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'actualiteCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
