'use strict';

describe('Component: users', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.users'));

  var usersComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    usersComponent = $componentController('users', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
