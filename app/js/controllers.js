'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'angularFire',function() {
    var ref = new Firebase("https://quarter-bets.firebaseio.com/");
    $scope.bets = [];
    angularFire(ref, $scope, "bets");
    $scope.addBet = function(e) {
      if (e.keyCode != 13) return;
      $scope.bets.push({from: $scope.bet, body: $scope.wager});
      $scope.bet = "";
    };
  }])
  .controller('MyCtrl2', ['angularFire', function() {

  }])
  .controller('MyCtrl3', ['angularFire', function() {

  }]);