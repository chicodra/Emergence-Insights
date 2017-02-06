'use strict';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('forum', {
      url: '/forum',
      template: '<forum></forum>'
    })
  .state('foruminfo', {
    url: '/forum/:forumName',
    template: '<foruminfo></foruminfo>',

  })
    .state('categorie', {
    url: '/categorie',
    template: '<categorie></categorie>',

  });
}
