'use strict';

var app = require('../..');
import request from 'supertest';

var newPresentation;

describe('Presentation API:', function() {
  describe('GET /api/presentations', function() {
    var presentations;

    beforeEach(function(done) {
      request(app)
        .get('/api/presentations')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          presentations = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      presentations.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/presentations', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/presentations')
        .send({
          name: 'New Presentation',
          info: 'This is the brand new presentation!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPresentation = res.body;
          done();
        });
    });

    it('should respond with the newly created presentation', function() {
      newPresentation.name.should.equal('New Presentation');
      newPresentation.info.should.equal('This is the brand new presentation!!!');
    });
  });

  describe('GET /api/presentations/:id', function() {
    var presentation;

    beforeEach(function(done) {
      request(app)
        .get(`/api/presentations/${newPresentation._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          presentation = res.body;
          done();
        });
    });

    afterEach(function() {
      presentation = {};
    });

    it('should respond with the requested presentation', function() {
      presentation.name.should.equal('New Presentation');
      presentation.info.should.equal('This is the brand new presentation!!!');
    });
  });

  describe('PUT /api/presentations/:id', function() {
    var updatedPresentation;

    beforeEach(function(done) {
      request(app)
        .put(`/api/presentations/${newPresentation._id}`)
        .send({
          name: 'Updated Presentation',
          info: 'This is the updated presentation!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPresentation = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPresentation = {};
    });

    it('should respond with the updated presentation', function() {
      updatedPresentation.name.should.equal('Updated Presentation');
      updatedPresentation.info.should.equal('This is the updated presentation!!!');
    });

    it('should respond with the updated presentation on a subsequent GET', function(done) {
      request(app)
        .get(`/api/presentations/${newPresentation._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let presentation = res.body;

          presentation.name.should.equal('Updated Presentation');
          presentation.info.should.equal('This is the updated presentation!!!');

          done();
        });
    });
  });

  describe('PATCH /api/presentations/:id', function() {
    var patchedPresentation;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/presentations/${newPresentation._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Presentation' },
          { op: 'replace', path: '/info', value: 'This is the patched presentation!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPresentation = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPresentation = {};
    });

    it('should respond with the patched presentation', function() {
      patchedPresentation.name.should.equal('Patched Presentation');
      patchedPresentation.info.should.equal('This is the patched presentation!!!');
    });
  });

  describe('DELETE /api/presentations/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/presentations/${newPresentation._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when presentation does not exist', function(done) {
      request(app)
        .delete(`/api/presentations/${newPresentation._id}`)
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
