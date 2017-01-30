'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ficheDeBonnePratiqueCtrlStub = {
  index: 'ficheDeBonnePratiqueCtrl.index',
  show: 'ficheDeBonnePratiqueCtrl.show',
  create: 'ficheDeBonnePratiqueCtrl.create',
  upsert: 'ficheDeBonnePratiqueCtrl.upsert',
  patch: 'ficheDeBonnePratiqueCtrl.patch',
  destroy: 'ficheDeBonnePratiqueCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ficheDeBonnePratiqueIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './fiche_de_bonne_pratique.controller': ficheDeBonnePratiqueCtrlStub
});

describe('FicheDeBonnePratique API Router:', function() {
  it('should return an express router instance', function() {
    ficheDeBonnePratiqueIndex.should.equal(routerStub);
  });

  describe('GET /api/fiche_de_bonne_pratiques', function() {
    it('should route to ficheDeBonnePratique.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ficheDeBonnePratiqueCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/fiche_de_bonne_pratiques/:id', function() {
    it('should route to ficheDeBonnePratique.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'ficheDeBonnePratiqueCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/fiche_de_bonne_pratiques', function() {
    it('should route to ficheDeBonnePratique.controller.create', function() {
      routerStub.post
        .withArgs('/', 'ficheDeBonnePratiqueCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/fiche_de_bonne_pratiques/:id', function() {
    it('should route to ficheDeBonnePratique.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'ficheDeBonnePratiqueCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/fiche_de_bonne_pratiques/:id', function() {
    it('should route to ficheDeBonnePratique.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'ficheDeBonnePratiqueCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/fiche_de_bonne_pratiques/:id', function() {
    it('should route to ficheDeBonnePratique.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'ficheDeBonnePratiqueCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
