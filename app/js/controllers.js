'use strict';

/* Controllers */

var quartersControllers = angular.module('quartersControllers', []);

quartersControllers.controller('MyCtrl1', ['$scope', 'angularFire',
  function($scope, angularFire){
    var inactivebets = new Firebase("https://quarter-bets-whammy.firebaseio.com/inactivebets");
    var activebets = new Firebase("https://quarter-bets-whammy.firebaseio.com/activebets");

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
      $scope.betparams = betInfo
    }

    Array.prototype.clean = function() {
      var new_array = this.filter(function(val) {
       return val !== null && val !== undefined;
      })
      return new_array;
    }

}]);

quartersControllers.controller('MyCtrl2', ['$scope', 'angularFire',
  function($scope, angularFire) {

}]);

quartersControllers.controller('MyCtrl3', ['$scope', 'angularFire',
  function($scope, angularFire) {

}]);