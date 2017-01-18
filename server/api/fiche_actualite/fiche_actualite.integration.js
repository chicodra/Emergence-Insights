'use strict';

var app = require('../..');
import request from 'supertest';

var newFicheActualite;

describe('FicheActualite API:', function() {
  describe('GET /api/fiche_actualites', function() {
    var ficheActualites;

    beforeEach(function(done) {
      request(app)
        .get('/api/fiche_actualites')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          ficheActualites = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      ficheActualites.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/fiche_actualites', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/fiche_actualites')
        .send({
          name: 'New FicheActualite',
          info: 'This is the brand new ficheActualite!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newFicheActualite = res.body;
          done();
        });
    });

    it('should respond with the newly created ficheActualite', function() {
      newFicheActualite.name.should.equal('New FicheActualite');
      newFicheActualite.info.should.equal('This is the brand new ficheActualite!!!');
    });
  });

  describe('GET /api/fiche_actualites/:id', function() {
    var ficheActualite;

    beforeEach(function(done) {
      request(app)
        .get(`/api/fiche_actualites/${newFicheActualite._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          ficheActualite = res.body;
          done();
        });
    });

    afterEach(function() {
      ficheActualite = {};
    });

    it('should respond with the requested ficheActualite', function() {
      ficheActualite.name.should.equal('New FicheActualite');
      ficheActualite.info.should.equal('This is the brand new ficheActualite!!!');
    });
  });

  describe('PUT /api/fiche_actualites/:id', function() {
    var updatedFicheActualite;

    beforeEach(function(done) {
      request(app)
        .put(`/api/fiche_actualites/${newFicheActualite._id}`)
        .send({
          name: 'Updated FicheActualite',
          info: 'This is the updated ficheActualite!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedFicheActualite = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFicheActualite = {};
    });

    it('should respond with the updated ficheActualite', function() {
      updatedFicheActualite.name.should.equal('Updated FicheActualite');
      updatedFicheActualite.info.should.equal('This is the updated ficheActualite!!!');
    });

    it('should respond with the updated ficheActualite on a subsequent GET', function(done) {
      request(app)
        .get(`/api/fiche_actualites/${newFicheActualite._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let ficheActualite = res.body;

          ficheActualite.name.should.equal('Updated FicheActualite');
          ficheActualite.info.should.equal('This is the updated ficheActualite!!!');

          done();
        });
    });
  });

  describe('PATCH /api/fiche_actualites/:id', function() {
    var patchedFicheActualite;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/fiche_actualites/${newFicheActualite._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched FicheActualite' },
          { op: 'replace', path: '/info', value: 'This is the patched ficheActualite!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedFicheActualite = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedFicheActualite = {};
    });

    it('should respond with the patched ficheActualite', function() {
      patchedFicheActualite.name.should.equal('Patched FicheActualite');
      patchedFicheActualite.info.should.equal('This is the patched ficheActualite!!!');
    });
  });

  describe('DELETE /api/fiche_actualites/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/fiche_actualites/${newFicheActualite._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when ficheActualite does not exist', function(done) {
      request(app)
        .delete(`/api/fiche_actualites/${newFicheActualite._id}`)
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
