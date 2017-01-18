'use strict';

var app = require('../..');
import request from 'supertest';

var newPartieTheme;

describe('PartieTheme API:', function() {
  describe('GET /api/partie_themes', function() {
    var partieThemes;

    beforeEach(function(done) {
      request(app)
        .get('/api/partie_themes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          partieThemes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      partieThemes.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/partie_themes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/partie_themes')
        .send({
          name: 'New PartieTheme',
          info: 'This is the brand new partieTheme!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPartieTheme = res.body;
          done();
        });
    });

    it('should respond with the newly created partieTheme', function() {
      newPartieTheme.name.should.equal('New PartieTheme');
      newPartieTheme.info.should.equal('This is the brand new partieTheme!!!');
    });
  });

  describe('GET /api/partie_themes/:id', function() {
    var partieTheme;

    beforeEach(function(done) {
      request(app)
        .get(`/api/partie_themes/${newPartieTheme._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          partieTheme = res.body;
          done();
        });
    });

    afterEach(function() {
      partieTheme = {};
    });

    it('should respond with the requested partieTheme', function() {
      partieTheme.name.should.equal('New PartieTheme');
      partieTheme.info.should.equal('This is the brand new partieTheme!!!');
    });
  });

  describe('PUT /api/partie_themes/:id', function() {
    var updatedPartieTheme;

    beforeEach(function(done) {
      request(app)
        .put(`/api/partie_themes/${newPartieTheme._id}`)
        .send({
          name: 'Updated PartieTheme',
          info: 'This is the updated partieTheme!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPartieTheme = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPartieTheme = {};
    });

    it('should respond with the updated partieTheme', function() {
      updatedPartieTheme.name.should.equal('Updated PartieTheme');
      updatedPartieTheme.info.should.equal('This is the updated partieTheme!!!');
    });

    it('should respond with the updated partieTheme on a subsequent GET', function(done) {
      request(app)
        .get(`/api/partie_themes/${newPartieTheme._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let partieTheme = res.body;

          partieTheme.name.should.equal('Updated PartieTheme');
          partieTheme.info.should.equal('This is the updated partieTheme!!!');

          done();
        });
    });
  });

  describe('PATCH /api/partie_themes/:id', function() {
    var patchedPartieTheme;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/partie_themes/${newPartieTheme._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched PartieTheme' },
          { op: 'replace', path: '/info', value: 'This is the patched partieTheme!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPartieTheme = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPartieTheme = {};
    });

    it('should respond with the patched partieTheme', function() {
      patchedPartieTheme.name.should.equal('Patched PartieTheme');
      patchedPartieTheme.info.should.equal('This is the patched partieTheme!!!');
    });
  });

  describe('DELETE /api/partie_themes/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/partie_themes/${newPartieTheme._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when partieTheme does not exist', function(done) {
      request(app)
        .delete(`/api/partie_themes/${newPartieTheme._id}`)
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
