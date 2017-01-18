'use strict';

var app = require('../..');
import request from 'supertest';

var newActualite;

describe('Actualite API:', function() {
  describe('GET /api/actualites', function() {
    var actualites;

    beforeEach(function(done) {
      request(app)
        .get('/api/actualites')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          actualites = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      actualites.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/actualites', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/actualites')
        .send({
          name: 'New Actualite',
          info: 'This is the brand new actualite!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newActualite = res.body;
          done();
        });
    });

    it('should respond with the newly created actualite', function() {
      newActualite.name.should.equal('New Actualite');
      newActualite.info.should.equal('This is the brand new actualite!!!');
    });
  });

  describe('GET /api/actualites/:id', function() {
    var actualite;

    beforeEach(function(done) {
      request(app)
        .get(`/api/actualites/${newActualite._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          actualite = res.body;
          done();
        });
    });

    afterEach(function() {
      actualite = {};
    });

    it('should respond with the requested actualite', function() {
      actualite.name.should.equal('New Actualite');
      actualite.info.should.equal('This is the brand new actualite!!!');
    });
  });

  describe('PUT /api/actualites/:id', function() {
    var updatedActualite;

    beforeEach(function(done) {
      request(app)
        .put(`/api/actualites/${newActualite._id}`)
        .send({
          name: 'Updated Actualite',
          info: 'This is the updated actualite!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedActualite = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedActualite = {};
    });

    it('should respond with the updated actualite', function() {
      updatedActualite.name.should.equal('Updated Actualite');
      updatedActualite.info.should.equal('This is the updated actualite!!!');
    });

    it('should respond with the updated actualite on a subsequent GET', function(done) {
      request(app)
        .get(`/api/actualites/${newActualite._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let actualite = res.body;

          actualite.name.should.equal('Updated Actualite');
          actualite.info.should.equal('This is the updated actualite!!!');

          done();
        });
    });
  });

  describe('PATCH /api/actualites/:id', function() {
    var patchedActualite;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/actualites/${newActualite._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Actualite' },
          { op: 'replace', path: '/info', value: 'This is the patched actualite!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedActualite = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedActualite = {};
    });

    it('should respond with the patched actualite', function() {
      patchedActualite.name.should.equal('Patched Actualite');
      patchedActualite.info.should.equal('This is the patched actualite!!!');
    });
  });

  describe('DELETE /api/actualites/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/actualites/${newActualite._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when actualite does not exist', function(done) {
      request(app)
        .delete(`/api/actualites/${newActualite._id}`)
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
