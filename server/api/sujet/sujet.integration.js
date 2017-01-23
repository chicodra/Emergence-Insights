'use strict';

var app = require('../..');
import request from 'supertest';

var newSujet;

describe('Sujet API:', function() {
  describe('GET /api/sujets', function() {
    var sujets;

    beforeEach(function(done) {
      request(app)
        .get('/api/sujets')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sujets = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      sujets.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/sujets', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/sujets')
        .send({
          name: 'New Sujet',
          info: 'This is the brand new sujet!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSujet = res.body;
          done();
        });
    });

    it('should respond with the newly created sujet', function() {
      newSujet.name.should.equal('New Sujet');
      newSujet.info.should.equal('This is the brand new sujet!!!');
    });
  });

  describe('GET /api/sujets/:id', function() {
    var sujet;

    beforeEach(function(done) {
      request(app)
        .get(`/api/sujets/${newSujet._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sujet = res.body;
          done();
        });
    });

    afterEach(function() {
      sujet = {};
    });

    it('should respond with the requested sujet', function() {
      sujet.name.should.equal('New Sujet');
      sujet.info.should.equal('This is the brand new sujet!!!');
    });
  });

  describe('PUT /api/sujets/:id', function() {
    var updatedSujet;

    beforeEach(function(done) {
      request(app)
        .put(`/api/sujets/${newSujet._id}`)
        .send({
          name: 'Updated Sujet',
          info: 'This is the updated sujet!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSujet = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSujet = {};
    });

    it('should respond with the updated sujet', function() {
      updatedSujet.name.should.equal('Updated Sujet');
      updatedSujet.info.should.equal('This is the updated sujet!!!');
    });

    it('should respond with the updated sujet on a subsequent GET', function(done) {
      request(app)
        .get(`/api/sujets/${newSujet._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let sujet = res.body;

          sujet.name.should.equal('Updated Sujet');
          sujet.info.should.equal('This is the updated sujet!!!');

          done();
        });
    });
  });

  describe('PATCH /api/sujets/:id', function() {
    var patchedSujet;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/sujets/${newSujet._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Sujet' },
          { op: 'replace', path: '/info', value: 'This is the patched sujet!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSujet = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSujet = {};
    });

    it('should respond with the patched sujet', function() {
      patchedSujet.name.should.equal('Patched Sujet');
      patchedSujet.info.should.equal('This is the patched sujet!!!');
    });
  });

  describe('DELETE /api/sujets/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/sujets/${newSujet._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when sujet does not exist', function(done) {
      request(app)
        .delete(`/api/sujets/${newSujet._id}`)
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
