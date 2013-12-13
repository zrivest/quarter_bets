'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('quartersApp',
  [ 'quartersApp.config'
  , 'quartersApp.controllers.header'
  , 'quartersApp.controllers.signin'
  , 'quartersApp.controllers.signup'
  , 'quartersApp.controllers.createbet'
  , 'firebase', 'ui.bootstrap', 'ngRoute']
  )
