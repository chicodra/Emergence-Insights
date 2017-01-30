'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ficheActualiteCtrlStub = {
  index: 'ficheActualiteCtrl.index',
  show: 'ficheActualiteCtrl.show',
  create: 'ficheActualiteCtrl.create',
  upsert: 'ficheActualiteCtrl.upsert',
  patch: 'ficheActualiteCtrl.patch',
  destroy: 'ficheActualiteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ficheActualiteIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './fiche_actualite.controller': ficheActualiteCtrlStub
});

describe('FicheActualite API Router:', function() {
  it('should return an express router instance', function() {
    ficheActualiteIndex.should.equal(routerStub);
  });

  describe('GET /api/fiche_actualites', function() {
    it('should route to ficheActualite.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ficheActualiteCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/fiche_actualites/:id', function() {
    it('should route to ficheActualite.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'ficheActualiteCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/fiche_actualites', function() {
    it('should route to ficheActualite.controller.create', function() {
      routerStub.post
        .withArgs('/', 'ficheActualiteCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/fiche_actualites/:id', function() {
    it('should route to ficheActualite.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'ficheActualiteCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/fiche_actualites/:id', function() {
    it('should route to ficheActualite.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'ficheActualiteCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/fiche_actualites/:id', function() {
    it('should route to ficheActualite.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'ficheActualiteCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
