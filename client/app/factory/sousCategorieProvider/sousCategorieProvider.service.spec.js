'use strict';

describe('Service: sousCategorieProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.sousCategorieProvider'));

  // instantiate service
  var sousCategorieProvider;
  beforeEach(inject(function(_sousCategorieProvider_) {
    sousCategorieProvider = _sousCategorieProvider_;
  }));

  it('should do something', function() {
    expect(!!sousCategorieProvider).toBe(true);
  });
});
