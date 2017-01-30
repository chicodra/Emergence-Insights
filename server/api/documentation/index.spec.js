'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var documentationCtrlStub = {
  index: 'documentationCtrl.index',
  show: 'documentationCtrl.show',
  create: 'documentationCtrl.create',
  upsert: 'documentationCtrl.upsert',
  patch: 'documentationCtrl.patch',
  destroy: 'documentationCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var documentationIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './documentation.controller': documentationCtrlStub
});

describe('Documentation API Router:', function() {
  it('should return an express router instance', function() {
    documentationIndex.should.equal(routerStub);
  });

  describe('GET /api/documentations', function() {
    it('should route to documentation.controller.index', function() {
      routerStub.get
        .withArgs('/', 'documentationCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/documentations/:id', function() {
    it('should route to documentation.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'documentationCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/documentations', function() {
    it('should route to documentation.controller.create', function() {
      routerStub.post
        .withArgs('/', 'documentationCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/documentations/:id', function() {
    it('should route to documentation.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'documentationCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/documentations/:id', function() {
    it('should route to documentation.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'documentationCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/documentations/:id', function() {
    it('should route to documentation.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'documentationCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
