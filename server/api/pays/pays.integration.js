'use strict';

var app = require('../..');
import request from 'supertest';

var newPays;

describe('Pays API:', function() {
  describe('GET /api/payss', function() {
    var payss;

    beforeEach(function(done) {
      request(app)
        .get('/api/payss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          payss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      payss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/payss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/payss')
        .send({
          name: 'New Pays',
          info: 'This is the brand new pays!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPays = res.body;
          done();
        });
    });

    it('should respond with the newly created pays', function() {
      newPays.name.should.equal('New Pays');
      newPays.info.should.equal('This is the brand new pays!!!');
    });
  });

  describe('GET /api/payss/:id', function() {
    var pays;

    beforeEach(function(done) {
      request(app)
        .get(`/api/payss/${newPays._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          pays = res.body;
          done();
        });
    });

    afterEach(function() {
      pays = {};
    });

    it('should respond with the requested pays', function() {
      pays.name.should.equal('New Pays');
      pays.info.should.equal('This is the brand new pays!!!');
    });
  });

  describe('PUT /api/payss/:id', function() {
    var updatedPays;

    beforeEach(function(done) {
      request(app)
        .put(`/api/payss/${newPays._id}`)
        .send({
          name: 'Updated Pays',
          info: 'This is the updated pays!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPays = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPays = {};
    });

    it('should respond with the updated pays', function() {
      updatedPays.name.should.equal('Updated Pays');
      updatedPays.info.should.equal('This is the updated pays!!!');
    });

    it('should respond with the updated pays on a subsequent GET', function(done) {
      request(app)
        .get(`/api/payss/${newPays._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let pays = res.body;

          pays.name.should.equal('Updated Pays');
          pays.info.should.equal('This is the updated pays!!!');

          done();
        });
    });
  });

  describe('PATCH /api/payss/:id', function() {
    var patchedPays;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/payss/${newPays._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Pays' },
          { op: 'replace', path: '/info', value: 'This is the patched pays!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPays = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPays = {};
    });

    it('should respond with the patched pays', function() {
      patchedPays.name.should.equal('Patched Pays');
      patchedPays.info.should.equal('This is the patched pays!!!');
    });
  });

  describe('DELETE /api/payss/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/payss/${newPays._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when pays does not exist', function(done) {
      request(app)
        .delete(`/api/payss/${newPays._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
