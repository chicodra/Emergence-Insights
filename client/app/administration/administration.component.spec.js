'use strict';

describe('Component: AdministrationComponent', function() {
  // load the controller's module
  beforeEach(module('emergenceInsightsApp.administration'));

  var AdministrationComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AdministrationComponent = $componentController('administration', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
