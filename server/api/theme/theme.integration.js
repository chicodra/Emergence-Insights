'use strict';

var app = require('../..');
import request from 'supertest';

var newTheme;

describe('Theme API:', function() {
  describe('GET /api/themes', function() {
    var themes;

    beforeEach(function(done) {
      request(app)
        .get('/api/themes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          themes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      themes.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/themes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/themes')
        .send({
          name: 'New Theme',
          info: 'This is the brand new theme!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newTheme = res.body;
          done();
        });
    });

    it('should respond with the newly created theme', function() {
      newTheme.name.should.equal('New Theme');
      newTheme.info.should.equal('This is the brand new theme!!!');
    });
  });

  describe('GET /api/themes/:id', function() {
    var theme;

    beforeEach(function(done) {
      request(app)
        .get(`/api/themes/${newTheme._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          theme = res.body;
          done();
        });
    });

    afterEach(function() {
      theme = {};
    });

    it('should respond with the requested theme', function() {
      theme.name.should.equal('New Theme');
      theme.info.should.equal('This is the brand new theme!!!');
    });
  });

  describe('PUT /api/themes/:id', function() {
    var updatedTheme;

    beforeEach(function(done) {
      request(app)
        .put(`/api/themes/${newTheme._id}`)
        .send({
          name: 'Updated Theme',
          info: 'This is the updated theme!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedTheme = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTheme = {};
    });

    it('should respond with the updated theme', function() {
      updatedTheme.name.should.equal('Updated Theme');
      updatedTheme.info.should.equal('This is the updated theme!!!');
    });

    it('should respond with the updated theme on a subsequent GET', function(done) {
      request(app)
        .get(`/api/themes/${newTheme._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let theme = res.body;

          theme.name.should.equal('Updated Theme');
          theme.info.should.equal('This is the updated theme!!!');

          done();
        });
    });
  });

  describe('PATCH /api/themes/:id', function() {
    var patchedTheme;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/themes/${newTheme._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Theme' },
          { op: 'replace', path: '/info', value: 'This is the patched theme!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedTheme = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedTheme = {};
    });

    it('should respond with the patched theme', function() {
      patchedTheme.name.should.equal('Patched Theme');
      patchedTheme.info.should.equal('This is the patched theme!!!');
    });
  });

  describe('DELETE /api/themes/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/themes/${newTheme._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when theme does not exist', function(done) {
      request(app)
        .delete(`/api/themes/${newTheme._id}`)
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
