'use strict';

describe('Component: IndiceComponent', function() {
  // load the controller's module
  beforeEach(module('emergenceInsightsApp.indice'));

  var IndiceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    IndiceComponent = $componentController('indice', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
