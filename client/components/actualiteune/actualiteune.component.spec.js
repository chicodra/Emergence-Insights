'use strict';

describe('Component: actualiteune', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.actualiteune'));

  var actualiteuneComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    actualiteuneComponent = $componentController('actualiteune', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
