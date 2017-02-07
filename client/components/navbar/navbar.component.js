'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';
const uiRouter = require('angular-ui-router');

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;
  state;
  themeProvider;
  notificationProvider;
  listnotif;
  listnot = [];
  nbnotif;
  paysProvider;
  listTheme;
  listPays;

  constructor(Auth, themeProvider, $state, paysProvider, notificationProvider, commentaireProvider) {

    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.state = $state;
    this.themeProvider = themeProvider;
    this.notificationProvider = notificationProvider;
    this.paysProvider = paysProvider;
    this.nbnotif=0;
    //console.log('init',themeProvider)
    console.log('navbar', this);
    //console.log('nombre pays', this.paysProvider.listPays.length);
  }
  goHome() {
    this.state.go('main');


  }
  Init() {
    //this.listTheme=[];
    if (this.themeProvider.listTheme == null) {
      this.themeProvider.listThemes().then(list => {
        this.listTheme = list;
        this.themeProvider.listTheme = list;

        console.log('themes vide', this.listTheme)

      });
    } else {
      this.listTheme = this.themeProvider.listTheme
      console.log('themes non vide', this.listTheme)
    }

    if (this.paysProvider.listpays == null) {
      this.paysProvider.listPays().then(list => {
        this.listPays = list;
        this.paysProvider.listpays = list;

        console.log('pays vide', this.listPays)

      });
    } else {
      this.listPays = this.paysProvider.listpays
      console.log('pays non vide', this.listPays)
    }

    this.notificationProvider.listNotification().then(list => {
      this.listnotif = list;
      for (var i = 0; i < this.listnotif.length; i++) {
        if (this.listnotif[i].id_message.id_user == this.getCurrentUser()._id) {
          this.listnot.push(this.listnotif[i]._id);
          //this.nbnotif=this.nbnotif+1;
        }
      }
      this.nbnotif=this.listnot.length;
      console.log('Notifications Wadji ', this.listnot);
      console.log('Nombre Notifications', this.nbnotif);
      if (this.listnotif.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Ray Notifications', this.listnotif);
      }

    });


  }
  //Init();
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
