'use strict';

var app = require('../..');
import request from 'supertest';

var newReponse;

describe('Reponse API:', function() {
  describe('GET /api/reponses', function() {
    var reponses;

    beforeEach(function(done) {
      request(app)
        .get('/api/reponses')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          reponses = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      reponses.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/reponses', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/reponses')
        .send({
          name: 'New Reponse',
          info: 'This is the brand new reponse!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newReponse = res.body;
          done();
        });
    });

    it('should respond with the newly created reponse', function() {
      newReponse.name.should.equal('New Reponse');
      newReponse.info.should.equal('This is the brand new reponse!!!');
    });
  });

  describe('GET /api/reponses/:id', function() {
    var reponse;

    beforeEach(function(done) {
      request(app)
        .get(`/api/reponses/${newReponse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          reponse = res.body;
          done();
        });
    });

    afterEach(function() {
      reponse = {};
    });

    it('should respond with the requested reponse', function() {
      reponse.name.should.equal('New Reponse');
      reponse.info.should.equal('This is the brand new reponse!!!');
    });
  });

  describe('PUT /api/reponses/:id', function() {
    var updatedReponse;

    beforeEach(function(done) {
      request(app)
        .put(`/api/reponses/${newReponse._id}`)
        .send({
          name: 'Updated Reponse',
          info: 'This is the updated reponse!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedReponse = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedReponse = {};
    });

    it('should respond with the updated reponse', function() {
      updatedReponse.name.should.equal('Updated Reponse');
      updatedReponse.info.should.equal('This is the updated reponse!!!');
    });

    it('should respond with the updated reponse on a subsequent GET', function(done) {
      request(app)
        .get(`/api/reponses/${newReponse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let reponse = res.body;

          reponse.name.should.equal('Updated Reponse');
          reponse.info.should.equal('This is the updated reponse!!!');

          done();
        });
    });
  });

  describe('PATCH /api/reponses/:id', function() {
    var patchedReponse;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/reponses/${newReponse._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Reponse' },
          { op: 'replace', path: '/info', value: 'This is the patched reponse!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedReponse = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedReponse = {};
    });

    it('should respond with the patched reponse', function() {
      patchedReponse.name.should.equal('Patched Reponse');
      patchedReponse.info.should.equal('This is the patched reponse!!!');
    });
  });

  describe('DELETE /api/reponses/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/reponses/${newReponse._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when reponse does not exist', function(done) {
      request(app)
        .delete(`/api/reponses/${newReponse._id}`)
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
