'use strict';

describe('Service: reponseProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.reponseProvider'));

  // instantiate service
  var reponseProvider;
  beforeEach(inject(function(_reponseProvider_) {
    reponseProvider = _reponseProvider_;
  }));

  it('should do something', function() {
    expect(!!reponseProvider).toBe(true);
  });
});
