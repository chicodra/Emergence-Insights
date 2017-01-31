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
  constructor(jsFunctionProvider, sujetProvider, userProvider, commentaireProvider) {
    this.jsFunctionProvider = jsFunctionProvider;
    this.sujetProvider = sujetProvider;
    this.userProvider = userProvider;
    this.commentaireProvider = commentaireProvider;
    this.message = 'Hello';
    console.log('forum', this);
  }
  Init() {
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

}

export class ForuminfoComponent {
  sujetProvider;
  listSujets;
  params
  jsFunctionProvider;
  nb;
  listeComs;
  commentaireProvider;
  constructor(sujetProvider, $stateParams, jsFunctionProvider, commentaireProvider) {
    this.message = 'Hello';
    this.sujetProvider = sujetProvider;
    this.params = $stateParams;
    this.jsFunctionProvider = jsFunctionProvider;
    this.commentaireProvider = commentaireProvider;
    this.listSujets = null;
    this.nb = 0;

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
      this.getComsBySujet(this.listSujets._id);
      // console.log('get sujet by name 4', p);

    });






  }

  Init() {
    var th = this;
    setTimeout(function () {
      th.getsujet(th.params.forumName);

    }, 50)
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
}
// ForumComponent.$inject = ["jsFunctionProvider", "sujetProvider", "userProvider"];
ForumComponent.$inject = ["jsFunctionProvider", "sujetProvider", "userProvider", "commentaireProvider"];
ForuminfoComponent.$inject = ["sujetProvider", "$stateParams", "jsFunctionProvider", "commentaireProvider"];
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
  .name;
