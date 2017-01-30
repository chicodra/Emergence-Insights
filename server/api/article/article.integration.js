'use strict';

var app = require('../..');
import request from 'supertest';

var newArticle;

describe('Article API:', function() {
  describe('GET /api/articles', function() {
    var articles;

    beforeEach(function(done) {
      request(app)
        .get('/api/articles')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          articles = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      articles.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/articles', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/articles')
        .send({
          name: 'New Article',
          info: 'This is the brand new article!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newArticle = res.body;
          done();
        });
    });

    it('should respond with the newly created article', function() {
      newArticle.name.should.equal('New Article');
      newArticle.info.should.equal('This is the brand new article!!!');
    });
  });

  describe('GET /api/articles/:id', function() {
    var article;

    beforeEach(function(done) {
      request(app)
        .get(`/api/articles/${newArticle._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          article = res.body;
          done();
        });
    });

    afterEach(function() {
      article = {};
    });

    it('should respond with the requested article', function() {
      article.name.should.equal('New Article');
      article.info.should.equal('This is the brand new article!!!');
    });
  });

  describe('PUT /api/articles/:id', function() {
    var updatedArticle;

    beforeEach(function(done) {
      request(app)
        .put(`/api/articles/${newArticle._id}`)
        .send({
          name: 'Updated Article',
          info: 'This is the updated article!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedArticle = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedArticle = {};
    });

    it('should respond with the updated article', function() {
      updatedArticle.name.should.equal('Updated Article');
      updatedArticle.info.should.equal('This is the updated article!!!');
    });

    it('should respond with the updated article on a subsequent GET', function(done) {
      request(app)
        .get(`/api/articles/${newArticle._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let article = res.body;

          article.name.should.equal('Updated Article');
          article.info.should.equal('This is the updated article!!!');

          done();
        });
    });
  });

  describe('PATCH /api/articles/:id', function() {
    var patchedArticle;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/articles/${newArticle._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Article' },
          { op: 'replace', path: '/info', value: 'This is the patched article!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedArticle = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedArticle = {};
    });

    it('should respond with the patched article', function() {
      patchedArticle.name.should.equal('Patched Article');
      patchedArticle.info.should.equal('This is the patched article!!!');
    });
  });

  describe('DELETE /api/articles/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/articles/${newArticle._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when article does not exist', function(done) {
      request(app)
        .delete(`/api/articles/${newArticle._id}`)
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
