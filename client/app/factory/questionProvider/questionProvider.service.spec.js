'use strict';

describe('Service: questionProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.questionProvider'));

  // instantiate service
  var questionProvider;
  beforeEach(inject(function(_questionProvider_) {
    questionProvider = _questionProvider_;
  }));

  it('should do something', function() {
    expect(!!questionProvider).toBe(true);
  });
});
