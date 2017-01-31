import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';


export class MainController {
  $http;
  socket;
  awesomeThings = [];
  newThing = '';
  listPres;
  themeProvider;
  paysProvider;
  jsFunctionProvider;
  presentationProvider;
  interviewsProvider;
  ListInterv;
  ListEtud;
  nbinterviews;
  nbetud;
  ListP;
  nbp;

  /*@ngInject*/
  constructor(themeProvider, paysProvider, jsFunctionProvider, presentationProvider, interviewsProvider,etudecasProvider) {
    //this.socket = socket;
        document.querySelector('header').hidden = false;
    this.themeProvider = themeProvider,
    this.paysProvider = paysProvider;
    this.interviewsProvider = interviewsProvider;
    this.etudecasProvider = etudecasProvider;
    /*this.nbpays = this.paysProvider.listPays.length;*/
    this.jsFunctionProvider = jsFunctionProvider;
    this.presentationProvider = presentationProvider;
    this.listPres = null;

    console.log('main', this);

  }

  Init() {
    // var swipers = [], winW, winH, winScr, _isresponsive, xsPoint = 480, smPoint = 768, mdPoint = 992, lgPoint = 1200, addPoint = 1600, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

    //console.log("init",this);
      this.interviewsProvider.listInterviews().then(list => {
      this.ListInterv = list;
      console.log('Raymond ', this.ListInterv.length);
      this.nbinterviews=this.ListInterv.length;
      console.log('Ray ', this.nbinterviews);
    });

      this.etudecasProvider.listEtudedeCas().then(list => {
      this.ListEtud = list;
      console.log('Raymond Etude ', this.ListEtud.length);
      this.nbetud=this.ListEtud.length;
      console.log('Ray Etude', this.nbetud);
    });
    
     this.paysProvider.listPays().then(list => {
      this.listP = list;
      console.log('Raymond Pays ', this.listP.length);
      this.nbp=this.listP.length;
      console.log('Ray Pays', this.nbp);
    });
    
    
    var th = this;
    setTimeout(function () {
      th.presentationProvider.listPresentations().then(list => {
        th.listPres = list;
        console.log('listpres', th.listPres);

      })
    }, 50)
    angular.element(document)
      .ready(() => {
        document.querySelector('header').style.backgroundColor = '';
        console.log('document main', document);
        /* demo animated */
        this.jsFunctionProvider.demoAnimated();
        /* Document REady */
        this.jsFunctionProvider.onDocumentReady();


        /* on Page Load */
        this.jsFunctionProvider.onPageLoad();
        this.jsFunctionProvider.initSwiper();
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

export default angular.module('emergenceApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
