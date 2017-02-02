'use strict';

describe('Service: temoignageProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.temoignageProvider'));

  // instantiate service
  var temoignageProvider;
  beforeEach(inject(function(_temoignageProvider_) {
    temoignageProvider = _temoignageProvider_;
  }));

  it('should do something', function() {
    expect(!!temoignageProvider).toBe(true);
  });
});
