'use strict';

/* Controllers */

var quartersControllers = angular.module('quartersControllers', []);

quartersControllers.controller('MyCtrl1', ['$scope', 'angularFire',
  function($scope, angularFire){
    var ref = new Firebase("https://quarter-bets-whammy.firebaseio.com/");
    
    $scope.betsList = [];
    angularFire(ref, $scope, "bets");
    $scope.addBet = function(betInfo) {
      var params = angular.copy(betInfo)
      $scope.master = params
      $scope.betsList.push({description: $scope.description, body: $scope.wagerAmount});
    };

}]);

quartersControllers.controller('MyCtrl2', ['$scope', 'angularFire',
  function($scope, angularFire) {

}]);

quartersControllers.controller('MyCtrl3', ['$scope', 'angularFire',
  function($scope, angularFire) {

}]);