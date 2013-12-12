'use strict';


// Declare app level module which depends on filters, and services
var quartersApp = angular.module('quartersApp', [
  'ngRoute',
  'quartersApp.filters',
  'quartersApp.services',
  'quartersApp.directives',
  'quartersControllers',
  'firebase'
]);

quartersApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/create-bet.html', controller: 'MyCtrl1'});
  $routeProvider.when('/signup', {templateUrl: 'partials/signup.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}])

  .run(['angularFireAuth', 'FBURL', '$rootScope',
    function(angularFireAuth, FBURL, $rootScope) {
      angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/signin'});
      $rootScope.FBURL = FBURL;
    }])

.constant('FBURL', 'https://quarter-bets-whammy.firebaseio.com/')
