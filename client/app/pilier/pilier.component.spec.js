'use strict';

describe('Component: PilierComponent', function() {
  // load the controller's module
  beforeEach(module('emergenceInsightsApp.pilier'));

  var PilierComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PilierComponent = $componentController('pilier', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
