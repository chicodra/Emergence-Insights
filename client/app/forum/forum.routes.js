'use strict';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('forumScat', {
      url: '/forum/:sscat',
      template: '<forum></forum>'
    })
  .state('forumScatSujet', {
    url: '/forum/:sscat/:sujet',
    template: '<foruminfo></foruminfo>',

  })
    .state('forum', {
    url: '/forum',
    template: '<categorie></categorie>',

  });
}
