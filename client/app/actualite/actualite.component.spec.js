'use strict';

describe('Component: ActualiteComponent', function() {
  // load the controller's module
  beforeEach(module('emergenceInsightsApp.actualite'));

  var ActualiteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ActualiteComponent = $componentController('actualite', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
