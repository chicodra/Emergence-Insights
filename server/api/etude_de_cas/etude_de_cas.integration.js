'use strict';

var app = require('../..');
import request from 'supertest';

var newEtudeDeCas;

describe('EtudeDeCas API:', function() {
  describe('GET /api/etude_de_cass', function() {
    var etudeDeCass;

    beforeEach(function(done) {
      request(app)
        .get('/api/etude_de_cass')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          etudeDeCass = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      etudeDeCass.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/etude_de_cass', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/etude_de_cass')
        .send({
          name: 'New EtudeDeCas',
          info: 'This is the brand new etudeDeCas!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newEtudeDeCas = res.body;
          done();
        });
    });

    it('should respond with the newly created etudeDeCas', function() {
      newEtudeDeCas.name.should.equal('New EtudeDeCas');
      newEtudeDeCas.info.should.equal('This is the brand new etudeDeCas!!!');
    });
  });

  describe('GET /api/etude_de_cass/:id', function() {
    var etudeDeCas;

    beforeEach(function(done) {
      request(app)
        .get(`/api/etude_de_cass/${newEtudeDeCas._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          etudeDeCas = res.body;
          done();
        });
    });

    afterEach(function() {
      etudeDeCas = {};
    });

    it('should respond with the requested etudeDeCas', function() {
      etudeDeCas.name.should.equal('New EtudeDeCas');
      etudeDeCas.info.should.equal('This is the brand new etudeDeCas!!!');
    });
  });

  describe('PUT /api/etude_de_cass/:id', function() {
    var updatedEtudeDeCas;

    beforeEach(function(done) {
      request(app)
        .put(`/api/etude_de_cass/${newEtudeDeCas._id}`)
        .send({
          name: 'Updated EtudeDeCas',
          info: 'This is the updated etudeDeCas!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedEtudeDeCas = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEtudeDeCas = {};
    });

    it('should respond with the updated etudeDeCas', function() {
      updatedEtudeDeCas.name.should.equal('Updated EtudeDeCas');
      updatedEtudeDeCas.info.should.equal('This is the updated etudeDeCas!!!');
    });

    it('should respond with the updated etudeDeCas on a subsequent GET', function(done) {
      request(app)
        .get(`/api/etude_de_cass/${newEtudeDeCas._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let etudeDeCas = res.body;

          etudeDeCas.name.should.equal('Updated EtudeDeCas');
          etudeDeCas.info.should.equal('This is the updated etudeDeCas!!!');

          done();
        });
    });
  });

  describe('PATCH /api/etude_de_cass/:id', function() {
    var patchedEtudeDeCas;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/etude_de_cass/${newEtudeDeCas._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched EtudeDeCas' },
          { op: 'replace', path: '/info', value: 'This is the patched etudeDeCas!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedEtudeDeCas = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedEtudeDeCas = {};
    });

    it('should respond with the patched etudeDeCas', function() {
      patchedEtudeDeCas.name.should.equal('Patched EtudeDeCas');
      patchedEtudeDeCas.info.should.equal('This is the patched etudeDeCas!!!');
    });
  });

  describe('DELETE /api/etude_de_cass/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/etude_de_cass/${newEtudeDeCas._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when etudeDeCas does not exist', function(done) {
      request(app)
        .delete(`/api/etude_de_cass/${newEtudeDeCas._id}`)
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
