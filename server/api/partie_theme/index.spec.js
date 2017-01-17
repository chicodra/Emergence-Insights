'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var partieThemeCtrlStub = {
  index: 'partieThemeCtrl.index',
  show: 'partieThemeCtrl.show',
  create: 'partieThemeCtrl.create',
  upsert: 'partieThemeCtrl.upsert',
  patch: 'partieThemeCtrl.patch',
  destroy: 'partieThemeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var partieThemeIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './partie_theme.controller': partieThemeCtrlStub
});

describe('PartieTheme API Router:', function() {
  it('should return an express router instance', function() {
    partieThemeIndex.should.equal(routerStub);
  });

  describe('GET /api/partie_themes', function() {
    it('should route to partieTheme.controller.index', function() {
      routerStub.get
        .withArgs('/', 'partieThemeCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/partie_themes/:id', function() {
    it('should route to partieTheme.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'partieThemeCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/partie_themes', function() {
    it('should route to partieTheme.controller.create', function() {
      routerStub.post
        .withArgs('/', 'partieThemeCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/partie_themes/:id', function() {
    it('should route to partieTheme.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'partieThemeCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/partie_themes/:id', function() {
    it('should route to partieTheme.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'partieThemeCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/partie_themes/:id', function() {
    it('should route to partieTheme.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'partieThemeCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
