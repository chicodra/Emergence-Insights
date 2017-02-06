'use strict';

describe('Service: categorieProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.categorieProvider'));

  // instantiate service
  var categorieProvider;
  beforeEach(inject(function(_categorieProvider_) {
    categorieProvider = _categorieProvider_;
  }));

  it('should do something', function() {
    expect(!!categorieProvider).toBe(true);
  });
});
