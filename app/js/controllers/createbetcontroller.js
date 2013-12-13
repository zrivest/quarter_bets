'use strict';

var quartersControllers = angular.module('quartersApp.controllers.createbet', []);

quartersControllers.controller('CreatebetCtrl', ['$scope', '$location', 'angularFire', 'FBURL',
  function($scope, $location, angularFire, FBURL){
    var inactivebets = new Firebase("https://quarter-bets-2.firebaseio.com/inactivebets");
    var activebets = new Firebase("https://quarter-bets-2.firebaseio.com/activebets");

    $scope.inactiveBetsList = [];
    $scope.activeBetsList = [];

    angularFire(inactivebets, $scope, "inactiveBetsList");
    angularFire(activebets, $scope, "activeBetsList");

    $scope.addBet = function(betInfo) {
      $scope.inactiveBetsList = $scope.inactiveBetsList.clean();
      $scope.activeBetsList = $scope.activeBetsList.clean();

      var params = angular.copy(betInfo)
      $scope.inactiveBetsList.push({description: params.description, wagerAmount: params.wagerAmount});
      $scope.master = $scope.inactiveBetsList
    };

    $scope.takeBet = function(betInfo) {

      var betparams = angular.copy(betInfo)
      $scope.activeBetsList.push({description: betparams.description, wagerAmount: betparams.wagerAmount});
      $scope.inactiveBetsList.remove($scope.inactiveBetsList.indexOf(betInfo));
      $scope.betparams = betInfo
    }

    Array.prototype.clean = function() {
      var new_array = this.filter(function(val) {
       return val !== null && val !== undefined;
      })
      return new_array;
    }

    Array.prototype.remove = function(from, to) {
      var rest = this.slice((to || from) + 1 || this.length);
      this.length = from < 0 ? this.length + from : from;
      return this.push.apply(this, rest);
    };

}]);