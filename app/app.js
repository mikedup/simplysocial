(function (window) { 'use strict';

angular.module('simplysocial', ['ngRoute', 'posts', 'users', 'headerBar'])

.config([
  '$locationProvider', 
  '$routeProvider', 
  function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
      templateUrl: '/app/errors/404.html'
    });
  } 
]);

}(window));