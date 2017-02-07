'use strict';

var app = require('../..');
import request from 'supertest';

var newSousCategorie;

describe('SousCategorie API:', function() {
  describe('GET /api/sousCategories', function() {
    var sousCategories;

    beforeEach(function(done) {
      request(app)
        .get('/api/sousCategories')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sousCategories = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      sousCategories.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/sousCategories', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/sousCategories')
        .send({
          name: 'New SousCategorie',
          info: 'This is the brand new sousCategorie!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSousCategorie = res.body;
          done();
        });
    });

    it('should respond with the newly created sousCategorie', function() {
      newSousCategorie.name.should.equal('New SousCategorie');
      newSousCategorie.info.should.equal('This is the brand new sousCategorie!!!');
    });
  });

  describe('GET /api/sousCategories/:id', function() {
    var sousCategorie;

    beforeEach(function(done) {
      request(app)
        .get(`/api/sousCategories/${newSousCategorie._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sousCategorie = res.body;
          done();
        });
    });

    afterEach(function() {
      sousCategorie = {};
    });

    it('should respond with the requested sousCategorie', function() {
      sousCategorie.name.should.equal('New SousCategorie');
      sousCategorie.info.should.equal('This is the brand new sousCategorie!!!');
    });
  });

  describe('PUT /api/sousCategories/:id', function() {
    var updatedSousCategorie;

    beforeEach(function(done) {
      request(app)
        .put(`/api/sousCategories/${newSousCategorie._id}`)
        .send({
          name: 'Updated SousCategorie',
          info: 'This is the updated sousCategorie!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSousCategorie = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSousCategorie = {};
    });

    it('should respond with the updated sousCategorie', function() {
      updatedSousCategorie.name.should.equal('Updated SousCategorie');
      updatedSousCategorie.info.should.equal('This is the updated sousCategorie!!!');
    });

    it('should respond with the updated sousCategorie on a subsequent GET', function(done) {
      request(app)
        .get(`/api/sousCategories/${newSousCategorie._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let sousCategorie = res.body;

          sousCategorie.name.should.equal('Updated SousCategorie');
          sousCategorie.info.should.equal('This is the updated sousCategorie!!!');

          done();
        });
    });
  });

  describe('PATCH /api/sousCategories/:id', function() {
    var patchedSousCategorie;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/sousCategories/${newSousCategorie._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched SousCategorie' },
          { op: 'replace', path: '/info', value: 'This is the patched sousCategorie!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSousCategorie = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSousCategorie = {};
    });

    it('should respond with the patched sousCategorie', function() {
      patchedSousCategorie.name.should.equal('Patched SousCategorie');
      patchedSousCategorie.info.should.equal('This is the patched sousCategorie!!!');
    });
  });

  describe('DELETE /api/sousCategories/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/sousCategories/${newSousCategorie._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when sousCategorie does not exist', function(done) {
      request(app)
        .delete(`/api/sousCategories/${newSousCategorie._id}`)
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
