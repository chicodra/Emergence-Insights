'use strict';

describe('Component: etudeDeCas', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.etudeDeCas'));

  var etudeDeCasComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    etudeDeCasComponent = $componentController('etudeDeCas', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
