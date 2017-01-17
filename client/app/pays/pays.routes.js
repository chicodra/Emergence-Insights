'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('pays', {
      url: '/pays',
      template: '<pays></pays>'
    });
}
