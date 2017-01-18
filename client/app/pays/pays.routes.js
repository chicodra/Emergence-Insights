'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('pays', {
      url: '/pays',
      template: '<pays></pays>'
    })
  .state('pays/:paysName', {
    url: '/pays/:paysName',
    template: '<infopays></infopays>',

  });
}
