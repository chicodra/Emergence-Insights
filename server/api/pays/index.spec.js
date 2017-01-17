'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var paysCtrlStub = {
  index: 'paysCtrl.index',
  show: 'paysCtrl.show',
  create: 'paysCtrl.create',
  upsert: 'paysCtrl.upsert',
  patch: 'paysCtrl.patch',
  destroy: 'paysCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var paysIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './pays.controller': paysCtrlStub
});

describe('Pays API Router:', function() {
  it('should return an express router instance', function() {
    paysIndex.should.equal(routerStub);
  });

  describe('GET /api/payss', function() {
    it('should route to pays.controller.index', function() {
      routerStub.get
        .withArgs('/', 'paysCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/payss/:id', function() {
    it('should route to pays.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'paysCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/payss', function() {
    it('should route to pays.controller.create', function() {
      routerStub.post
        .withArgs('/', 'paysCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/payss/:id', function() {
    it('should route to pays.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'paysCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/payss/:id', function() {
    it('should route to pays.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'paysCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/payss/:id', function() {
    it('should route to pays.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'paysCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
