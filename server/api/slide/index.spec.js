'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var slideCtrlStub = {
  index: 'slideCtrl.index',
  show: 'slideCtrl.show',
  create: 'slideCtrl.create',
  upsert: 'slideCtrl.upsert',
  patch: 'slideCtrl.patch',
  destroy: 'slideCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var slideIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './slide.controller': slideCtrlStub
});

describe('Slide API Router:', function() {
  it('should return an express router instance', function() {
    slideIndex.should.equal(routerStub);
  });

  describe('GET /api/slides', function() {
    it('should route to slide.controller.index', function() {
      routerStub.get
        .withArgs('/', 'slideCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/slides/:id', function() {
    it('should route to slide.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'slideCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/slides', function() {
    it('should route to slide.controller.create', function() {
      routerStub.post
        .withArgs('/', 'slideCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/slides/:id', function() {
    it('should route to slide.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'slideCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/slides/:id', function() {
    it('should route to slide.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'slideCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/slides/:id', function() {
    it('should route to slide.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'slideCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
