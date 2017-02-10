'use strict';

var app = require('../..');
import request from 'supertest';

var newSlide;

describe('Slide API:', function() {
  describe('GET /api/slides', function() {
    var slides;

    beforeEach(function(done) {
      request(app)
        .get('/api/slides')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          slides = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      slides.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/slides', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/slides')
        .send({
          name: 'New Slide',
          info: 'This is the brand new slide!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSlide = res.body;
          done();
        });
    });

    it('should respond with the newly created slide', function() {
      newSlide.name.should.equal('New Slide');
      newSlide.info.should.equal('This is the brand new slide!!!');
    });
  });

  describe('GET /api/slides/:id', function() {
    var slide;

    beforeEach(function(done) {
      request(app)
        .get(`/api/slides/${newSlide._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          slide = res.body;
          done();
        });
    });

    afterEach(function() {
      slide = {};
    });

    it('should respond with the requested slide', function() {
      slide.name.should.equal('New Slide');
      slide.info.should.equal('This is the brand new slide!!!');
    });
  });

  describe('PUT /api/slides/:id', function() {
    var updatedSlide;

    beforeEach(function(done) {
      request(app)
        .put(`/api/slides/${newSlide._id}`)
        .send({
          name: 'Updated Slide',
          info: 'This is the updated slide!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSlide = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSlide = {};
    });

    it('should respond with the updated slide', function() {
      updatedSlide.name.should.equal('Updated Slide');
      updatedSlide.info.should.equal('This is the updated slide!!!');
    });

    it('should respond with the updated slide on a subsequent GET', function(done) {
      request(app)
        .get(`/api/slides/${newSlide._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let slide = res.body;

          slide.name.should.equal('Updated Slide');
          slide.info.should.equal('This is the updated slide!!!');

          done();
        });
    });
  });

  describe('PATCH /api/slides/:id', function() {
    var patchedSlide;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/slides/${newSlide._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Slide' },
          { op: 'replace', path: '/info', value: 'This is the patched slide!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSlide = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSlide = {};
    });

    it('should respond with the patched slide', function() {
      patchedSlide.name.should.equal('Patched Slide');
      patchedSlide.info.should.equal('This is the patched slide!!!');
    });
  });

  describe('DELETE /api/slides/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/slides/${newSlide._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when slide does not exist', function(done) {
      request(app)
        .delete(`/api/slides/${newSlide._id}`)
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
