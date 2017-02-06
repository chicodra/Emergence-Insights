'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var categorieCtrlStub = {
  index: 'categorieCtrl.index',
  show: 'categorieCtrl.show',
  create: 'categorieCtrl.create',
  upsert: 'categorieCtrl.upsert',
  patch: 'categorieCtrl.patch',
  destroy: 'categorieCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var categorieIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './categorie.controller': categorieCtrlStub
});

describe('Categorie API Router:', function() {
  it('should return an express router instance', function() {
    categorieIndex.should.equal(routerStub);
  });

  describe('GET /api/categories', function() {
    it('should route to categorie.controller.index', function() {
      routerStub.get
        .withArgs('/', 'categorieCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/categories/:id', function() {
    it('should route to categorie.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'categorieCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/categories', function() {
    it('should route to categorie.controller.create', function() {
      routerStub.post
        .withArgs('/', 'categorieCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/categories/:id', function() {
    it('should route to categorie.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'categorieCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/categories/:id', function() {
    it('should route to categorie.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'categorieCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/categories/:id', function() {
    it('should route to categorie.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'categorieCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
