'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import pilier from './pilier/pilier.component';
import pays from './pays/pays.component';
import indice from './indice/indice.component'
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import si from '../components/sectionInformation/sectionInformation.component';
import revue from '../components/revueArticles/revueArticles.component';
import interviews from '../components/interviews/interviews.component';
import etudedecas from '../components/etudeDeCas/etudeDeCas.component';
import fichedebonnepratiques from '../components/ficheDeBonnePratiques/ficheDeBonnePratiques.component';
import listactualites from '../components/listActualites/listActualites.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import theme from './factory/themeProvider/themeProvider.service';
import paysProvider from './factory/paysProvider/paysProvider.service';
import articleComponent from './article/article.component';
import articleProvider from './factory/articleProvider/articleProvider.service';
import jsFunctionSlider from './factory/jsFunctionProvider/jsFunctionProvider.service';
import interviewsProvider from './factory/interviewsProvider/interviewsProvider.service';
import actualiteProvider from './factory/actualiteProvider/actualiteProvider.service';
import documentationProvider from './factory/documentationProvider/documentationProvider.service';
import agendaProvider from './factory/agendaProvider/agendaProvider.service';
import InterviewComponent from './interview/interview.component';
import questionProvider from './factory/questionProvider/questionProvider.service';
import reponseProvider from './factory/reponseProvider/reponseProvider.service';
import ActualiteComponent from './actualite/actualite.component';
import PartenairesComponent from './partenaires/partenaires.component';



//import './app.css';

angular.module('emergenceApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
    uiBootstrap, _Auth, account, navbar, admin, pilier, pays, indice, articleComponent, footer,
    main, constants, socket, util, theme, paysProvider, articleProvider, si, revue, interviews, etudedecas,
    fichedebonnepratiques, jsFunctionSlider, actualiteProvider, documentationProvider, agendaProvider,
    InterviewComponent, interviewsProvider, questionProvider, reponseProvider, ActualiteComponent, listactualites, PartenairesComponent


  ])
  .config(routeConfig)
  .run(function ($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedIn(function (loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['emergenceApp'], {
      strictDi: true
    });






  });
