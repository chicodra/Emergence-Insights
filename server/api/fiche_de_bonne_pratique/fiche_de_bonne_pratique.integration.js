'use strict';

var app = require('../..');
import request from 'supertest';

var newFicheDeBonnePratique;

describe('FicheDeBonnePratique API:', function() {
  describe('GET /api/fiche_de_bonne_pratiques', function() {
    var ficheDeBonnePratiques;

    beforeEach(function(done) {
      request(app)
        .get('/api/fiche_de_bonne_pratiques')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          ficheDeBonnePratiques = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      ficheDeBonnePratiques.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/fiche_de_bonne_pratiques', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/fiche_de_bonne_pratiques')
        .send({
          name: 'New FicheDeBonnePratique',
          info: 'This is the brand new ficheDeBonnePratique!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newFicheDeBonnePratique = res.body;
          done();
        });
    });

    it('should respond with the newly created ficheDeBonnePratique', function() {
      newFicheDeBonnePratique.name.should.equal('New FicheDeBonnePratique');
      newFicheDeBonnePratique.info.should.equal('This is the brand new ficheDeBonnePratique!!!');
    });
  });

  describe('GET /api/fiche_de_bonne_pratiques/:id', function() {
    var ficheDeBonnePratique;

    beforeEach(function(done) {
      request(app)
        .get(`/api/fiche_de_bonne_pratiques/${newFicheDeBonnePratique._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          ficheDeBonnePratique = res.body;
          done();
        });
    });

    afterEach(function() {
      ficheDeBonnePratique = {};
    });

    it('should respond with the requested ficheDeBonnePratique', function() {
      ficheDeBonnePratique.name.should.equal('New FicheDeBonnePratique');
      ficheDeBonnePratique.info.should.equal('This is the brand new ficheDeBonnePratique!!!');
    });
  });

  describe('PUT /api/fiche_de_bonne_pratiques/:id', function() {
    var updatedFicheDeBonnePratique;

    beforeEach(function(done) {
      request(app)
        .put(`/api/fiche_de_bonne_pratiques/${newFicheDeBonnePratique._id}`)
        .send({
          name: 'Updated FicheDeBonnePratique',
          info: 'This is the updated ficheDeBonnePratique!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedFicheDeBonnePratique = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFicheDeBonnePratique = {};
    });

    it('should respond with the updated ficheDeBonnePratique', function() {
      updatedFicheDeBonnePratique.name.should.equal('Updated FicheDeBonnePratique');
      updatedFicheDeBonnePratique.info.should.equal('This is the updated ficheDeBonnePratique!!!');
    });

    it('should respond with the updated ficheDeBonnePratique on a subsequent GET', function(done) {
      request(app)
        .get(`/api/fiche_de_bonne_pratiques/${newFicheDeBonnePratique._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let ficheDeBonnePratique = res.body;

          ficheDeBonnePratique.name.should.equal('Updated FicheDeBonnePratique');
          ficheDeBonnePratique.info.should.equal('This is the updated ficheDeBonnePratique!!!');

          done();
        });
    });
  });

  describe('PATCH /api/fiche_de_bonne_pratiques/:id', function() {
    var patchedFicheDeBonnePratique;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/fiche_de_bonne_pratiques/${newFicheDeBonnePratique._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched FicheDeBonnePratique' },
          { op: 'replace', path: '/info', value: 'This is the patched ficheDeBonnePratique!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedFicheDeBonnePratique = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedFicheDeBonnePratique = {};
    });

    it('should respond with the patched ficheDeBonnePratique', function() {
      patchedFicheDeBonnePratique.name.should.equal('Patched FicheDeBonnePratique');
      patchedFicheDeBonnePratique.info.should.equal('This is the patched ficheDeBonnePratique!!!');
    });
  });

  describe('DELETE /api/fiche_de_bonne_pratiques/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/fiche_de_bonne_pratiques/${newFicheDeBonnePratique._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when ficheDeBonnePratique does not exist', function(done) {
      request(app)
        .delete(`/api/fiche_de_bonne_pratiques/${newFicheDeBonnePratique._id}`)
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
