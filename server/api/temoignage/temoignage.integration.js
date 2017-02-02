'use strict';

var app = require('../..');
import request from 'supertest';

var newTemoignage;

describe('Temoignage API:', function() {
  describe('GET /api/temoignages', function() {
    var temoignages;

    beforeEach(function(done) {
      request(app)
        .get('/api/temoignages')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          temoignages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      temoignages.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/temoignages', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/temoignages')
        .send({
          name: 'New Temoignage',
          info: 'This is the brand new temoignage!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newTemoignage = res.body;
          done();
        });
    });

    it('should respond with the newly created temoignage', function() {
      newTemoignage.name.should.equal('New Temoignage');
      newTemoignage.info.should.equal('This is the brand new temoignage!!!');
    });
  });

  describe('GET /api/temoignages/:id', function() {
    var temoignage;

    beforeEach(function(done) {
      request(app)
        .get(`/api/temoignages/${newTemoignage._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          temoignage = res.body;
          done();
        });
    });

    afterEach(function() {
      temoignage = {};
    });

    it('should respond with the requested temoignage', function() {
      temoignage.name.should.equal('New Temoignage');
      temoignage.info.should.equal('This is the brand new temoignage!!!');
    });
  });

  describe('PUT /api/temoignages/:id', function() {
    var updatedTemoignage;

    beforeEach(function(done) {
      request(app)
        .put(`/api/temoignages/${newTemoignage._id}`)
        .send({
          name: 'Updated Temoignage',
          info: 'This is the updated temoignage!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedTemoignage = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTemoignage = {};
    });

    it('should respond with the updated temoignage', function() {
      updatedTemoignage.name.should.equal('Updated Temoignage');
      updatedTemoignage.info.should.equal('This is the updated temoignage!!!');
    });

    it('should respond with the updated temoignage on a subsequent GET', function(done) {
      request(app)
        .get(`/api/temoignages/${newTemoignage._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let temoignage = res.body;

          temoignage.name.should.equal('Updated Temoignage');
          temoignage.info.should.equal('This is the updated temoignage!!!');

          done();
        });
    });
  });

  describe('PATCH /api/temoignages/:id', function() {
    var patchedTemoignage;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/temoignages/${newTemoignage._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Temoignage' },
          { op: 'replace', path: '/info', value: 'This is the patched temoignage!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedTemoignage = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedTemoignage = {};
    });

    it('should respond with the patched temoignage', function() {
      patchedTemoignage.name.should.equal('Patched Temoignage');
      patchedTemoignage.info.should.equal('This is the patched temoignage!!!');
    });
  });

  describe('DELETE /api/temoignages/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/temoignages/${newTemoignage._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when temoignage does not exist', function(done) {
      request(app)
        .delete(`/api/temoignages/${newTemoignage._id}`)
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
