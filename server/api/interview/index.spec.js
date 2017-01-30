'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var interviewCtrlStub = {
  index: 'interviewCtrl.index',
  show: 'interviewCtrl.show',
  create: 'interviewCtrl.create',
  upsert: 'interviewCtrl.upsert',
  patch: 'interviewCtrl.patch',
  destroy: 'interviewCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var interviewIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './interview.controller': interviewCtrlStub
});

describe('Interview API Router:', function() {
  it('should return an express router instance', function() {
    interviewIndex.should.equal(routerStub);
  });

  describe('GET /api/interviews', function() {
    it('should route to interviewsProvider.controller.index', function() {
      routerStub.get
        .withArgs('/', 'interviewCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/interviews/:id', function() {
    it('should route to interviewsProvider.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'interviewCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/interviews', function() {
    it('should route to interviewsProvider.controller.create', function() {
      routerStub.post
        .withArgs('/', 'interviewCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/interviews/:id', function() {
    it('should route to interviewsProvider.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'interviewCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/interviews/:id', function() {
    it('should route to interviewsProvider.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'interviewCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/interviews/:id', function() {
    it('should route to interviewsProvider.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'interviewCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
