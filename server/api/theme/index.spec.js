'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var themeCtrlStub = {
  index: 'themeCtrl.index',
  show: 'themeCtrl.show',
  create: 'themeCtrl.create',
  upsert: 'themeCtrl.upsert',
  patch: 'themeCtrl.patch',
  destroy: 'themeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var themeIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './theme.controller': themeCtrlStub
});

describe('Theme API Router:', function() {
  it('should return an express router instance', function() {
    themeIndex.should.equal(routerStub);
  });

  describe('GET /api/themes', function() {
    it('should route to theme.controller.index', function() {
      routerStub.get
        .withArgs('/', 'themeCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/themes/:id', function() {
    it('should route to theme.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'themeCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/themes', function() {
    it('should route to theme.controller.create', function() {
      routerStub.post
        .withArgs('/', 'themeCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/themes/:id', function() {
    it('should route to theme.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'themeCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/themes/:id', function() {
    it('should route to theme.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'themeCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/themes/:id', function() {
    it('should route to theme.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'themeCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
