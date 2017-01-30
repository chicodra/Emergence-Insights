'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('partenaires', {
      url: '/partenaires',
      template: '<partenaires></partenaires>'
    });
}
