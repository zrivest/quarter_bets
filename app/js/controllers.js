'use strict';

/* Controllers */

var quartersControllers = angular.module('quartersControllers', []);

quartersControllers.controller('MyCtrl1', ['$scope', 'angularFire',
  function($scope, angularFire){
    var ref = new Firebase("https://quarter-bets-whammy.firebaseio.com/");
    
    $scope.inactiveBetsList = [];
    $scope.activeBetsList = [];
    angularFire(ref, $scope, "inactiveBetsList", "activeBetsList");

    $scope.addBet = function(betInfo) {
      $scope.inactiveBetsList = $scope.inactiveBetsList.clean();
      $scope.activeBetsList = $scope.activeBetsList.clean();
      var params = angular.copy(betInfo)
      $scope.inactiveBetsList.push({description: params.description, wagerAmount: params.wagerAmount});
      $scope.master = $scope.inactiveBetsList
    };

    $scope.takeBet = function(betInfo) {
      $scope.inactiveBetsList = $scope.inactiveBetsList.clean();
      $scope.activeBetsList = $scope.activeBetsList.clean();
      var test = betInfo
      var betparams = angular.copy(betInfo)
      $scope.activeBetsList.push({description: betparams.description, wagerAmount: betparams.wagerAmount});
      $scope.betparams = test 
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