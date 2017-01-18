'use strict';

describe('Service: articleProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.articleProvider'));

  // instantiate service
  var articleProvider;
  beforeEach(inject(function(_articleProvider_) {
    articleProvider = _articleProvider_;
  }));

  it('should do something', function() {
    expect(!!articleProvider).toBe(true);
  });
});
