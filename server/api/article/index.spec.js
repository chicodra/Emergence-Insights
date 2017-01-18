'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var articleCtrlStub = {
  index: 'articleCtrl.index',
  show: 'articleCtrl.show',
  create: 'articleCtrl.create',
  upsert: 'articleCtrl.upsert',
  patch: 'articleCtrl.patch',
  destroy: 'articleCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var articleIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './article.controller': articleCtrlStub
});

describe('Article API Router:', function() {
  it('should return an express router instance', function() {
    articleIndex.should.equal(routerStub);
  });

  describe('GET /api/articles', function() {
    it('should route to article.controller.index', function() {
      routerStub.get
        .withArgs('/', 'articleCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/articles/:id', function() {
    it('should route to article.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'articleCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/articles', function() {
    it('should route to article.controller.create', function() {
      routerStub.post
        .withArgs('/', 'articleCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/articles/:id', function() {
    it('should route to article.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'articleCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/articles/:id', function() {
    it('should route to article.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'articleCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/articles/:id', function() {
    it('should route to article.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'articleCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
