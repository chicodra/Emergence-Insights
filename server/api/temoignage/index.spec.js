'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var temoignageCtrlStub = {
  index: 'temoignageCtrl.index',
  show: 'temoignageCtrl.show',
  create: 'temoignageCtrl.create',
  upsert: 'temoignageCtrl.upsert',
  patch: 'temoignageCtrl.patch',
  destroy: 'temoignageCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var temoignageIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './temoignage.controller': temoignageCtrlStub
});

describe('Temoignage API Router:', function() {
  it('should return an express router instance', function() {
    temoignageIndex.should.equal(routerStub);
  });

  describe('GET /api/temoignages', function() {
    it('should route to temoignage.controller.index', function() {
      routerStub.get
        .withArgs('/', 'temoignageCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/temoignages/:id', function() {
    it('should route to temoignage.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'temoignageCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/temoignages', function() {
    it('should route to temoignage.controller.create', function() {
      routerStub.post
        .withArgs('/', 'temoignageCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/temoignages/:id', function() {
    it('should route to temoignage.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'temoignageCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/temoignages/:id', function() {
    it('should route to temoignage.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'temoignageCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/temoignages/:id', function() {
    it('should route to temoignage.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'temoignageCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
