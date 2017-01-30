'use strict';

describe('Service: commentaireProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.commentaireProvider'));

  // instantiate service
  var commentaireProvider;
  beforeEach(inject(function(_commentaireProvider_) {
    commentaireProvider = _commentaireProvider_;
  }));

  it('should do something', function() {
    expect(!!commentaireProvider).toBe(true);
  });
});
