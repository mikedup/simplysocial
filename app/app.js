(function(window, undefined){'use strict';

angular.module('simplysocial', ['ngRoute', 'posts', 'users'])

.config([
  '$locationProvider', 
  '$routeProvider', 
  function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
      templateUrl: '/app/errors/404.html'
    });
  } 
]);

}(window));