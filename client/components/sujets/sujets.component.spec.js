'use strict';

describe('Component: sujets', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.sujets'));

  var sujetsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    sujetsComponent = $componentController('sujets', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
