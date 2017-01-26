'use strict';

describe('Component: PartenairesComponent', function() {
  // load the controller's module
  beforeEach(module('emergenceInsightsApp.partenaires'));

  var PartenairesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PartenairesComponent = $componentController('partenaires', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
