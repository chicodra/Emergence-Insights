'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sousCategorieCtrlStub = {
  index: 'sousCategorieCtrl.index',
  show: 'sousCategorieCtrl.show',
  create: 'sousCategorieCtrl.create',
  upsert: 'sousCategorieCtrl.upsert',
  patch: 'sousCategorieCtrl.patch',
  destroy: 'sousCategorieCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sousCategorieIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './sousCategorie.controller': sousCategorieCtrlStub
});

describe('SousCategorie API Router:', function() {
  it('should return an express router instance', function() {
    sousCategorieIndex.should.equal(routerStub);
  });

  describe('GET /api/sousCategories', function() {
    it('should route to sousCategorie.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sousCategorieCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/sousCategories/:id', function() {
    it('should route to sousCategorie.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'sousCategorieCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/sousCategories', function() {
    it('should route to sousCategorie.controller.create', function() {
      routerStub.post
        .withArgs('/', 'sousCategorieCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/sousCategories/:id', function() {
    it('should route to sousCategorie.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'sousCategorieCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/sousCategories/:id', function() {
    it('should route to sousCategorie.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'sousCategorieCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/sousCategories/:id', function() {
    it('should route to sousCategorie.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'sousCategorieCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
