'use strict';

describe('Component: articles', function() {
  // load the component's module
  beforeEach(module('emergenceApp.articles'));

  var articlesComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    articlesComponent = $componentController('articles', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
