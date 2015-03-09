(function (window) { 'use strict';

angular.module('simplysocial', ['ngRoute', 'posts', 'users'])

.config([
  '$locationProvider', 
  '$routeProvider', 
  function ($locationProvider, $routeProvider) {
   // $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
      templateUrl: '/app/errors/404.html'
    });
  } 
])

// Simulate logged in user
.controller('HeaderCtrl', [
  '$scope',
  function ($scope) {
    $scope.user = {
      username: 'jessicatuan',
      name: 'Jessica Tuan',
      photo: '/img/user_tuan.jpg'
    }
  }
]);

}(window));