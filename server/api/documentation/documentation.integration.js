'use strict';

var app = require('../..');
import request from 'supertest';

var newDocumentation;

describe('Documentation API:', function() {
  describe('GET /api/documentations', function() {
    var documentations;

    beforeEach(function(done) {
      request(app)
        .get('/api/documentations')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          documentations = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      documentations.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/documentations', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/documentations')
        .send({
          name: 'New Documentation',
          info: 'This is the brand new documentation!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDocumentation = res.body;
          done();
        });
    });

    it('should respond with the newly created documentation', function() {
      newDocumentation.name.should.equal('New Documentation');
      newDocumentation.info.should.equal('This is the brand new documentation!!!');
    });
  });

  describe('GET /api/documentations/:id', function() {
    var documentation;

    beforeEach(function(done) {
      request(app)
        .get(`/api/documentations/${newDocumentation._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          documentation = res.body;
          done();
        });
    });

    afterEach(function() {
      documentation = {};
    });

    it('should respond with the requested documentation', function() {
      documentation.name.should.equal('New Documentation');
      documentation.info.should.equal('This is the brand new documentation!!!');
    });
  });

  describe('PUT /api/documentations/:id', function() {
    var updatedDocumentation;

    beforeEach(function(done) {
      request(app)
        .put(`/api/documentations/${newDocumentation._id}`)
        .send({
          name: 'Updated Documentation',
          info: 'This is the updated documentation!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDocumentation = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDocumentation = {};
    });

    it('should respond with the updated documentation', function() {
      updatedDocumentation.name.should.equal('Updated Documentation');
      updatedDocumentation.info.should.equal('This is the updated documentation!!!');
    });

    it('should respond with the updated documentation on a subsequent GET', function(done) {
      request(app)
        .get(`/api/documentations/${newDocumentation._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let documentation = res.body;

          documentation.name.should.equal('Updated Documentation');
          documentation.info.should.equal('This is the updated documentation!!!');

          done();
        });
    });
  });

  describe('PATCH /api/documentations/:id', function() {
    var patchedDocumentation;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/documentations/${newDocumentation._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Documentation' },
          { op: 'replace', path: '/info', value: 'This is the patched documentation!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDocumentation = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDocumentation = {};
    });

    it('should respond with the patched documentation', function() {
      patchedDocumentation.name.should.equal('Patched Documentation');
      patchedDocumentation.info.should.equal('This is the patched documentation!!!');
    });
  });

  describe('DELETE /api/documentations/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/documentations/${newDocumentation._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when documentation does not exist', function(done) {
      request(app)
        .delete(`/api/documentations/${newDocumentation._id}`)
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
