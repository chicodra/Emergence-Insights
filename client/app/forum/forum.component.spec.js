'use strict';

describe('Component: ForumComponent', function() {
  // load the controller's module
  beforeEach(module('emergenceInsightsApp.forum'));

  var ForumComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ForumComponent = $componentController('forum', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
