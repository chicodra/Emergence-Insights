'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './interview.routes';

export class InterviewComponent {
  /*@ngInject*/
   jsFunctionProvider;
  questionProvider;
  params;
  reponseProvider;
  interview=null;
  questions;
  reponses;
  timeout;
  interviewsProvider;
  constructor( jsFunctionProvider,questionProvider,$stateParams,reponseProvider,interviewsProvider,$timeout) {
    this.message = 'Hello';
    this.interviewsProvider=interviewsProvider;
    this.params=$stateParams;
    this.interview=this.getInterview(this.params.libelle);


    this.jsFunctionProvider = jsFunctionProvider;
    this.questionProvider=questionProvider;

    this.reponseProvider=reponseProvider;
    this.reponses=[];

    this.timeout=$timeout;

    console.log('interview',this);

  }
  getInterview(libelle){
    this.interviewsProvider.getInterviewByName(libelle).then(list => {
      this.interview=list[0];
      console.log('interview vide', this.interview);

      this.getQuestions(this.interview._id)
      //return list;







    });
  }
  Init() {
    console.log('this questions',this.questions);

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
getReponse(id){
  this.reponseProvider.getReponseByQuestion(id).then(list =>{
    console.log('list',list);
    this.reponses.push(list);
    //return list;
  });

}
  getQuestions(id){
    this.questionProvider.listQuestionsInterviews(id).then(list => {
      this.questions=list;
      for(var q in this.questions){
        var quest=this.questions[q];
        console.log(quest);
        this.getReponse(quest._id)
        //this.reponses.push(reponse);
        //console.log('reponse',reponse);

      }


      //console.log('questions vide', this.questions);





    });
    window.setTimeout(console.log('reponses',this.reponses),5000)
    //console.log('reponses',this.reponses);
  }

}
InterviewComponent.$inject=["jsFunctionProvider","questionProvider","$stateParams","reponseProvider","interviewsProvider","$timeout"];
export default angular.module('emergenceInsightsApp.interview', [uiRouter])
  .config(routes)
  .component('interview', {
    template: require('./interview.html'),
    controller: InterviewComponent,
    controllerAs: 'vm'
  })
  .name;
