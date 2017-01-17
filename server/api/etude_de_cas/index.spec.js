'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var etudeDeCasCtrlStub = {
  index: 'etudeDeCasCtrl.index',
  show: 'etudeDeCasCtrl.show',
  create: 'etudeDeCasCtrl.create',
  upsert: 'etudeDeCasCtrl.upsert',
  patch: 'etudeDeCasCtrl.patch',
  destroy: 'etudeDeCasCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var etudeDeCasIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './etude_de_cas.controller': etudeDeCasCtrlStub
});

describe('EtudeDeCas API Router:', function() {
  it('should return an express router instance', function() {
    etudeDeCasIndex.should.equal(routerStub);
  });

  describe('GET /api/etude_de_cass', function() {
    it('should route to etudeDeCas.controller.index', function() {
      routerStub.get
        .withArgs('/', 'etudeDeCasCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/etude_de_cass/:id', function() {
    it('should route to etudeDeCas.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'etudeDeCasCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/etude_de_cass', function() {
    it('should route to etudeDeCas.controller.create', function() {
      routerStub.post
        .withArgs('/', 'etudeDeCasCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/etude_de_cass/:id', function() {
    it('should route to etudeDeCas.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'etudeDeCasCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/etude_de_cass/:id', function() {
    it('should route to etudeDeCas.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'etudeDeCasCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/etude_de_cass/:id', function() {
    it('should route to etudeDeCas.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'etudeDeCasCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
