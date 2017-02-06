'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');

import routes from './forum.routes';

export class ForumComponent {
  /*@ngInject*/
  jsFunctionProvider;
  sujetProvider;
  userProvider;
  listeSujets;
  listeUsers;
  listeComs;
  commentaireProvider;
  isLoggedIn: Function;
  getCurrentUser: Function;
  titreSujet;
  currentdate = new Date();
  categorieProvider;
  listcat;
  listsujetscat;
  constructor(jsFunctionProvider, sujetProvider, userProvider, commentaireProvider, Auth, $http, categorieProvider) {
    this.jsFunctionProvider = jsFunctionProvider;
    this.categorieProvider = categorieProvider;
    this.sujetProvider = sujetProvider;
    this.userProvider = userProvider;
    this.commentaireProvider = commentaireProvider;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.message = 'Hello';
    console.log('forum', this);
  }
  GetSujetByCategorie(id) {
    this.categorieProvider.GetSujetByCategorie(id).then(list => {
      this.listsujetscat = list;
      console.log("liste sujets par catégories", list);
    })

  }

  Init() {

    this.categorieProvider.listCategorie().then(list => {
      console.log("liste Catégories", list);
      this.listcat = list;
      for (var i = 0; i < this.listcat.length; i++) {
        this.GetSujetByCategorie(this.listcat[i]._id);
      }

    })
    //this.listTheme=[];
    var th = this;
    setTimeout(function () {
      th.getSubjects();
      th.getUsers();
      th.getComsBySujet(1);

    }, 50);



    angular.element(document)
      .ready(() => {
        document.querySelector('header').style.backgroundColor = '#222';
        console.log('document main', document);
        /* demo animated */
        this.jsFunctionProvider.demoAnimated();
        /* Document REady */
        this.jsFunctionProvider.onDocumentReady();


        /* on Page Load */
        this.jsFunctionProvider.onPageLoad();
        this.jsFunctionProvider.onPageResize();
        this.jsFunctionProvider.onSliderArrowClick();
        this.jsFunctionProvider.onPageScroll();
        /*==============================*/
        /* 08 - BUTTONS, CLICKS, HOVERS */
        /*==============================*/
        this.jsFunctionProvider.topMenu();
        this.jsFunctionProvider.videoPlayBtn();
        this.jsFunctionProvider.videoPlayBtnBig();
        this.jsFunctionProvider.Popup();
        this.jsFunctionProvider.hoverAnimation();
        this.jsFunctionProvider.changeImageOnSpeaker();
        this.jsFunctionProvider.hoverAnimationOnConference();
        /*==================================================*/
        /* 09 - TIMES, TABS */
        /*==================================================*/
        this.jsFunctionProvider.Timers();
        this.jsFunctionProvider.CountDown();
        this.jsFunctionProvider.Tabs();
        /*=====================*/
        /* 10 - LIGHT-BOX */
        /*=====================*/
        this.jsFunctionProvider.activityIndicatorFunctions();
        this.jsFunctionProvider.closeButtonFunctions();
        this.jsFunctionProvider.overLay();
        this.jsFunctionProvider.capTion();
        this.jsFunctionProvider.arrOws();
        /*==================================================*/
        /* 11 - STYLE BAR */
        /*==================================================*/
        this.jsFunctionProvider.confButton();
        this.jsFunctionProvider.entryButton();

        /*==================================================*/
        /* 13 - AJAX CONTACT FORM */
        /*==================================================*/
        this.jsFunctionProvider.ajaxContactForm();




      });

  }
  getSubjects() {
    this.sujetProvider.listSujets().then(list => {
      console.log("liste sujets", list);
      this.listeSujets = list;
    })

  }

  getUsers() {
    this.userProvider.getUsers().then(list => {
      console.log("liste users", list);
      this.listeUsers = list;
    })

  }

  ajoutSujet() {
    var datetime = this.currentdate.getDate() + "/" +
      (this.currentdate.getMonth() + 1) + "/" +
      this.currentdate.getFullYear();
    if (this.titreSujet) {
      this.$http.post('/api/sujets', {
        titre: this.titreSujet,
        id_user: this.getCurrentUser()._id,

        date_creation: datetime
      });
      this.titreSujet = '';
      window.location.reload();
    }

  }


}

export class ForuminfoComponent {
  userProvider;
  sujetProvider;
  listSujets;
  params
  jsFunctionProvider;
  nb;
  listeComs;
  commentaireProvider;
  contenuCom;
  $http;
  socket;
  $window;
  currentdate = new Date();
  constructor(sujetProvider, $stateParams, jsFunctionProvider, commentaireProvider, userProvider, Auth, $http, socket, $window) {

    'ngInject';
    this.sujetProvider = sujetProvider;
    this.params = $stateParams;
    this.jsFunctionProvider = jsFunctionProvider;
    this.commentaireProvider = commentaireProvider;
    this.userProvider = userProvider;
    this.listSujets = null;
    this.nb = 0;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.$http = $http;
    this.socket = socket;
    this.$window = $window;


    //this.getsujet(this.params.sujetName);
    console.log('get sujet by name 3', this);

    // console.log('this', this);
  }

  getComsBySujet(id) {
    this.commentaireProvider.getComsBySujet(id).then(list => {
      console.log("liste coms", list);
      this.listeComs = list;

    })

  }

  getsujet(sujetName) {
    //console.log(paysName,list);
    this.sujetProvider.getSujetByName(sujetName).then(list => {
      console.log('get sujet by name', list);
      // p = list;
      this.listSujets = list[0];
      console.log('get sujet by name 2', this.listSujets);
      this.getComsBySujet(this.listSujets._id).then(response => {
        this.listeComs = response.data;
        this.socket.syncUpdates('commentaires', this.listeComs);
      });
      // console.log('get sujet by name 4', p);
      this.getusersbysujet(this.listSujets._id, this.listSujets.id_user._id);

    });






  }

  getusersbysujet(idsujet, iduser) {
    console.log('debut', idsujet, iduser)
    //console.log(paysName,list);
    this.userProvider.getUsersBySujet(idsujet, iduser).then(list => {
      console.log('get user by name', list);
      // p = list;
      this.listUsers = list;
      console.log('liste users by on sujet', this.listUsers);


    });


  }

  Init() {
    var th = this;
    setTimeout(function () {
      th.getsujet(th.params.forumName);
      this.socket.syncUpdates('commentaires', this.listeComs);
    }, 100)
    // console.log('paysprovider',this.paysProvider);
    console.log('sujet list', this.listSujets);


    //window.setTimeout(this.getActualitesPays(this.pays._id),100);
    // this.getActualitesPays(this.pays._id);
    // this.getDocumentationsPays(this.pays._id);
    // this.getAgendasPays(this.pays._id);


    angular.element(document)
      .ready(() => {

        console.log('document pilier', document);
        /* demo animated */
        this.jsFunctionProvider.demoAnimated();
        /* Document REady */
        this.jsFunctionProvider.onDocumentReady();


        /* on Page Load */
        this.jsFunctionProvider.onPageLoad();
        this.jsFunctionProvider.onPageResize();
        //this.jsFunctionProvider.onSliderArrowClick();
        this.jsFunctionProvider.onPageScroll();
        /*==============================*/
        /* 08 - BUTTONS, CLICKS, HOVERS */
        /*==============================*/
        this.jsFunctionProvider.topMenu();
        this.jsFunctionProvider.videoPlayBtn();
        this.jsFunctionProvider.videoPlayBtnBig();
        this.jsFunctionProvider.Popup();
        this.jsFunctionProvider.hoverAnimation();
        this.jsFunctionProvider.changeImageOnSpeaker();
        this.jsFunctionProvider.hoverAnimationOnConference();
        /*==================================================*/
        /* 09 - TIMES, TABS */
        /*==================================================*/
        this.jsFunctionProvider.Timers();
        this.jsFunctionProvider.CountDown();
        this.jsFunctionProvider.Tabs();
        /*=====================*/
        /* 10 - LIGHT-BOX */
        /*=====================*/
        this.jsFunctionProvider.activityIndicatorFunctions();
        this.jsFunctionProvider.closeButtonFunctions();
        this.jsFunctionProvider.overLay();
        this.jsFunctionProvider.capTion();
        this.jsFunctionProvider.arrOws();
        /*==================================================*/
        /* 11 - STYLE BAR */
        /*==================================================*/
        this.jsFunctionProvider.confButton();
        this.jsFunctionProvider.entryButton();

        /*==================================================*/
        /* 13 - AJAX CONTACT FORM */
        /*==================================================*/
        this.jsFunctionProvider.ajaxContactForm();




      });


    setTimeout(function () {
      document.querySelector('header').style.backgroundColor = '#222';
    }, 100);

  }


  create() {

    var local_http = this.$http;
    var datetime = this.currentdate.getDate() + "/" +
      (this.currentdate.getMonth() + 1) + "/" +
      this.currentdate.getFullYear();
    if (this.contenuCom) {
      this.$http.post('/api/messages', {
          id_user: this.getCurrentUser()._id,
          id_sujet: this.listSujets._id,
          id_createur: this.listSujets.id_user._id,
          contenu: this.contenuCom,
          date_creation: this.datetime

        })
        .then(function (data) {
          local_http.post('/api/notifications', {
            id_message: data.data._id,
            date_Envoi: datetime,
            seen: false
          })
        });
      this.contenuCom = '';

      window.location.reload();

    }
  }

}

export class CategorieComponent { 
  /*@ngInject*/
  jsFunctionProvider;
  sujetProvider;
  userProvider;
  listeSujets;
  listeUsers;
  listeComs;
  commentaireProvider;
  isLoggedIn: Function;
  getCurrentUser: Function;
  titreSujet;
  currentdate = new Date();
  categorieProvider;
  listcat;
  listsujetscat;
  constructor(jsFunctionProvider, sujetProvider, userProvider, commentaireProvider, Auth, $http, categorieProvider) {
    this.jsFunctionProvider = jsFunctionProvider;
    this.categorieProvider = categorieProvider;
    this.sujetProvider = sujetProvider;
    this.userProvider = userProvider;
    this.commentaireProvider = commentaireProvider;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.message = 'Hello';
    console.log('forum', this);
  }

  Init() {

    angular.element(document)
      .ready(() => {
        document.querySelector('header').style.backgroundColor = '#222';
        console.log('document main', document);
        /* demo animated */
        this.jsFunctionProvider.demoAnimated();
        /* Document REady */
        this.jsFunctionProvider.onDocumentReady();


        /* on Page Load */
        this.jsFunctionProvider.onPageLoad();
        this.jsFunctionProvider.onPageResize();
        this.jsFunctionProvider.onSliderArrowClick();
        this.jsFunctionProvider.onPageScroll();
        /*==============================*/
        /* 08 - BUTTONS, CLICKS, HOVERS */
        /*==============================*/
        this.jsFunctionProvider.topMenu();
        this.jsFunctionProvider.videoPlayBtn();
        this.jsFunctionProvider.videoPlayBtnBig();
        this.jsFunctionProvider.Popup();
        this.jsFunctionProvider.hoverAnimation();
        this.jsFunctionProvider.changeImageOnSpeaker();
        this.jsFunctionProvider.hoverAnimationOnConference();
        /*==================================================*/
        /* 09 - TIMES, TABS */
        /*==================================================*/
        this.jsFunctionProvider.Timers();
        this.jsFunctionProvider.CountDown();
        this.jsFunctionProvider.Tabs();
        /*=====================*/
        /* 10 - LIGHT-BOX */
        /*=====================*/
        this.jsFunctionProvider.activityIndicatorFunctions();
        this.jsFunctionProvider.closeButtonFunctions();
        this.jsFunctionProvider.overLay();
        this.jsFunctionProvider.capTion();
        this.jsFunctionProvider.arrOws();
        /*==================================================*/
        /* 11 - STYLE BAR */
        /*==================================================*/
        this.jsFunctionProvider.confButton();
        this.jsFunctionProvider.entryButton();

        /*==================================================*/
        /* 13 - AJAX CONTACT FORM */
        /*==================================================*/
        this.jsFunctionProvider.ajaxContactForm();




      });

  }
}
// ForumComponent.$inject = ["jsFunctionProvider", "sujetProvider", "userProvider"];
ForumComponent.$inject = ["jsFunctionProvider", "sujetProvider", "userProvider", "commentaireProvider", "Auth", "$http", "categorieProvider"];
ForuminfoComponent.$inject = ["sujetProvider", "$stateParams", "jsFunctionProvider", "commentaireProvider", "userProvider", "Auth", "$http", "socket", "$window"];


export default angular.module('emergenceInsightsApp.forum', [uiRouter])
  .config(routes)
  .component('forum', {
    template: require('./forum.html'),
    controller: ForumComponent,
    controllerAs: 'vm'
  })
  .component('foruminfo', {
    template: require('./foruminfo.html'),
    controller: ForuminfoComponent,
    controllerAs: 'vm'
  })
  .component('categorie', {
    template: require('./categorie.html'),
    controller: CategorieComponent,
    controllerAs: 'vm'
  })
  .name;
