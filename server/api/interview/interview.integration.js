'use strict';

var app = require('../..');
import request from 'supertest';

var newInterview;

describe('Interview API:', function() {
  describe('GET /api/interviews', function() {
    var interviews;

    beforeEach(function(done) {
      request(app)
        .get('/api/interviews')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          interviews = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      interviews.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/interviews', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/interviews')
        .send({
          name: 'New Interview',
          info: 'This is the brand new interview!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newInterview = res.body;
          done();
        });
    });

    it('should respond with the newly created interview', function() {
      newInterview.name.should.equal('New Interview');
      newInterview.info.should.equal('This is the brand new interview!!!');
    });
  });

  describe('GET /api/interviews/:id', function() {
    var interview;

    beforeEach(function(done) {
      request(app)
        .get(`/api/interviews/${newInterview._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          interview = res.body;
          done();
        });
    });

    afterEach(function() {
      interview = {};
    });

    it('should respond with the requested interview', function() {
      interview.name.should.equal('New Interview');
      interview.info.should.equal('This is the brand new interview!!!');
    });
  });

  describe('PUT /api/interviews/:id', function() {
    var updatedInterview;

    beforeEach(function(done) {
      request(app)
        .put(`/api/interviews/${newInterview._id}`)
        .send({
          name: 'Updated Interview',
          info: 'This is the updated interview!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedInterview = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedInterview = {};
    });

    it('should respond with the updated interview', function() {
      updatedInterview.name.should.equal('Updated Interview');
      updatedInterview.info.should.equal('This is the updated interview!!!');
    });

    it('should respond with the updated interview on a subsequent GET', function(done) {
      request(app)
        .get(`/api/interviews/${newInterview._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let interview = res.body;

          interview.name.should.equal('Updated Interview');
          interview.info.should.equal('This is the updated interview!!!');

          done();
        });
    });
  });

  describe('PATCH /api/interviews/:id', function() {
    var patchedInterview;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/interviews/${newInterview._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Interview' },
          { op: 'replace', path: '/info', value: 'This is the patched interview!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedInterview = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedInterview = {};
    });

    it('should respond with the patched interview', function() {
      patchedInterview.name.should.equal('Patched Interview');
      patchedInterview.info.should.equal('This is the patched interview!!!');
    });
  });

  describe('DELETE /api/interviews/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/interviews/${newInterview._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when interview does not exist', function(done) {
      request(app)
        .delete(`/api/interviews/${newInterview._id}`)
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
