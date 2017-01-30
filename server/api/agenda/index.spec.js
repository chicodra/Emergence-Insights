'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var agendaCtrlStub = {
  index: 'agendaCtrl.index',
  show: 'agendaCtrl.show',
  create: 'agendaCtrl.create',
  upsert: 'agendaCtrl.upsert',
  patch: 'agendaCtrl.patch',
  destroy: 'agendaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var agendaIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './agenda.controller': agendaCtrlStub
});

describe('Agenda API Router:', function() {
  it('should return an express router instance', function() {
    agendaIndex.should.equal(routerStub);
  });

  describe('GET /api/agendas', function() {
    it('should route to agenda.controller.index', function() {
      routerStub.get
        .withArgs('/', 'agendaCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/agendas/:id', function() {
    it('should route to agenda.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'agendaCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/agendas', function() {
    it('should route to agenda.controller.create', function() {
      routerStub.post
        .withArgs('/', 'agendaCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/agendas/:id', function() {
    it('should route to agenda.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'agendaCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/agendas/:id', function() {
    it('should route to agenda.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'agendaCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/agendas/:id', function() {
    it('should route to agenda.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'agendaCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
