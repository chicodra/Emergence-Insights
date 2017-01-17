import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;
  socket;
  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }

  classPays() {
    console.log('okk');
    this.cl = "menu-dropdown-icon";
    this.myStyle = {
      'display': 'block', 'opacity': '1'
    }
  }

   delclassPays() {
    console.log('okk');
    this.cl = "";
    this.myStyle = {
      'display': 'none', 'opacity': '1'
    }
  }

  classSecteur() {
     console.log('okkgfjkggfj');
    this.dropSecteur = "menu-dropdown-icon";
    this.styleSecteur = {
      'display': 'block', 'opacity': '1'
    }
  }

  delclassSecteur() {
    console.log('okk');
    this.dropSecteur = "";
    this.styleSecteur = {
      'display': 'none', 'opacity': '1'
    }
  }
}

export default angular.module('emergenceApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'MainCtrl'
  })
  .name;
