'use strict';

describe('Component: PaysComponent', function() {
  // load the controller's module
  beforeEach(module('emergenceInsightsApp.pays'));

  var PaysComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PaysComponent = $componentController('pays', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
