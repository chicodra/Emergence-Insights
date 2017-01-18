'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

  classPays() {
    console.log('okk');
    this.cl = "menu-dropdown-icon";
    this.myStyle = {
      'display': 'block',
      'opacity': '1'
    }
  }

  delclassPays() {
    console.log('okk');
    this.cl = "";
    this.myStyle = {
      'display': 'none',
      'opacity': '1'
    }
  }

  classSecteur() {
    console.log('okkgfjkggfj');
    this.dropSecteur = "menu-dropdown-icon";
    this.styleSecteur = {
      'display': 'block',
      'opacity': '1'
    }
  }

  delclassSecteur() {
    console.log('okk');
    this.dropSecteur = "";
    this.styleSecteur = {
      'display': 'none',
      'opacity': '1'
    }
  }
  classEmergence() {
    console.log('okk');
    this.dropEmergence = "menu-dropdown-icon";
    this.styleEmergence = {
      'display': 'block',
      'opacity': '1'
    }
  }

  delclassEmergence() {
    console.log('okk');
    this.dropEmergence = "";
    this.styleEmergence = {
      'display': 'none',
      'opacity': '1'
    }
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent,
    controllerAs: 'nbCtrl'
  })
  .name;
