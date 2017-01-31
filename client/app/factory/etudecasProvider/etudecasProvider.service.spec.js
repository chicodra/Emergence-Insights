'use strict';

describe('Service: etudecasProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.etudecasProvider'));

  // instantiate service
  var etudecasProvider;
  beforeEach(inject(function(_etudecasProvider_) {
    etudecasProvider = _etudecasProvider_;
  }));

  it('should do something', function() {
    expect(!!etudecasProvider).toBe(true);
  });
});
