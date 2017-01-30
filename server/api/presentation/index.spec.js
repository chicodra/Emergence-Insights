'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var presentationCtrlStub = {
  index: 'presentationCtrl.index',
  show: 'presentationCtrl.show',
  create: 'presentationCtrl.create',
  upsert: 'presentationCtrl.upsert',
  patch: 'presentationCtrl.patch',
  destroy: 'presentationCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var presentationIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './presentation.controller': presentationCtrlStub
});

describe('Presentation API Router:', function() {
  it('should return an express router instance', function() {
    presentationIndex.should.equal(routerStub);
  });

  describe('GET /api/presentations', function() {
    it('should route to presentation.controller.index', function() {
      routerStub.get
        .withArgs('/', 'presentationCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/presentations/:id', function() {
    it('should route to presentation.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'presentationCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/presentations', function() {
    it('should route to presentation.controller.create', function() {
      routerStub.post
        .withArgs('/', 'presentationCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/presentations/:id', function() {
    it('should route to presentation.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'presentationCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/presentations/:id', function() {
    it('should route to presentation.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'presentationCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/presentations/:id', function() {
    it('should route to presentation.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'presentationCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
