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
  contenuSujet;
  currentdate = new Date();
  categorieProvider;
  listcat;
  listsujetscat;
  sousCategorieProvider;
  listSousCat;
  sousCatVisible = false;
  sousCat;
  unSujet;
  constructor(jsFunctionProvider, sujetProvider, userProvider, commentaireProvider, Auth, $http, categorieProvider, sousCategorieProvider) {
    this.jsFunctionProvider = jsFunctionProvider;
    this.categorieProvider = categorieProvider;
    this.sujetProvider = sujetProvider;
    this.userProvider = userProvider;
    this.commentaireProvider = commentaireProvider;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.message = 'Hello';
    this.sousCategorieProvider = sousCategorieProvider;
    this.$http = $http;
    this.getCurrentUser = Auth.getCurrentUserSync;
    console.log('forum', this);
  }
  // GetSujetByCategorie(id) {
  //   this.categorieProvider.GetSujetByCategorie(id).then(list => {
  //     this.listsujetscat = list;
  //     console.log("liste sujets par catégories", list);
  //   })

  // }

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
        contenu: this.contenuSujet,
        id_user: this.getCurrentUser()._id,
        id_cat: this.sousCat,
        date_creation: datetime
      });
      this.titreSujet = '';

      window.location.reload();


    }

  }

  clickCategorie(id) {

    this.sousCategorieProvider.listSousCategorie(id).then(list => {
      this.listSousCat = list;
      this.sousCatVisible = true;
    })
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
  urlSujet;
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
    this.urlSujet = $stateParams.sujet;
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

  // getsujet(sujetName) {
  //   //console.log(paysName,list);
  //   this.sujetProvider.getSujetByName(sujetName).then(list => {
  //     console.log('get sujet by name', list);
  //     // p = list;
  //     this.listSujets = list[0];
  //     console.log('get sujet by name 2', this.listSujets);
  //     this.getComsBySujet(this.listSujets._id).then(response => {
  //       this.listeComs = response.data;
  //       this.socket.syncUpdates('commentaires', this.listeComs);
  //     });
  //     // console.log('get sujet by name 4', p);
  //     this.getusersbysujet(this.listSujets._id, this.listSujets.id_user._id);

  //   });






  // }

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
      if (th.sujetProvider.Lesujet == null) {
        th.sujetProvider.getSujetById(th.urlSujet).then(list => {
          console.log('djjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdddddddddddddddddddddt', list);
          th.unSujet = list;
          th.getComsBySujet(th.unSujet._id);
        });

      } else {
        th.unSujet = th.sujetProvider.Lesujet;
        th.getComsBySujet(th.unSujet._id);
      }

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
  sousCategorieProvider;
  listcat;
  listsujetscat;
  listSousCat;
  urlSujet;
  constructor(jsFunctionProvider, sujetProvider, userProvider, commentaireProvider, Auth, $http, categorieProvider, sousCategorieProvider) {
    this.jsFunctionProvider = jsFunctionProvider;
    this.categorieProvider = categorieProvider;
    this.sousCategorieProvider = sousCategorieProvider;
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
      //  this.jsFunctionProvider.onSliderArrowClick();
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


        this.categorieProvider.listCategorie().then(list => {
          var l = this.sousCategorieProvider;
          list.forEach(function (element) {
            l.listSousCategorie(element._id)
              .then(liste => {
                element.q = liste;
              });
          });
          this.listcat = list;
          console.log("oooooooooooooooooooooooooo", list);


        })

      });

  }
  partage(scat) {
    console.log("partage", scat);
    this.sousCategorieProvider.SousCat = scat;
  }
}


// ForumComponent.$inject = ["jsFunctionProvider", "sujetProvider", "userProvider"];
ForumComponent.$inject = ["jsFunctionProvider", "sujetProvider", "userProvider", "commentaireProvider", "Auth", "$http", "categorieProvider", "sousCategorieProvider"];

ForuminfoComponent.$inject = ["sujetProvider", "$stateParams", "jsFunctionProvider", "commentaireProvider", "userProvider", "Auth", "$http", "socket", "$window"];

CategorieComponent.$inject = ["jsFunctionProvider", "sujetProvider", "userProvider", "commentaireProvider", "Auth", "$http", "categorieProvider", "sousCategorieProvider"];

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
