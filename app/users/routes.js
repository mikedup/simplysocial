(function (angular) { 'use strict';

angular.module('users')

.config([
  '$routeProvider', 
  function ($routeProvider) {
    $routeProvider.when('/users/:username', {
      title: 'User',
      templateUrl: '/app/users/templates/detail.html',
      controller: 'UserDetailCtrl'
    });
    $routeProvider.when('/users/:username/settings', {
      title: 'User Settings',
      templateUrl: '/app/users/templates/settings.html',
      controller: 'UserDetailCtrl'
    });
    $routeProvider.when('/users/:username/followers', {
      title: 'User Followers',
      templateUrl: '/app/users/templates/detail.html',
      controller: 'UserDetailCtrl'
    });
    $routeProvider.when('/users/:username/following', {
      title: 'User Following',
      templateUrl: '/app/users/templates/detail.html',
      controller: 'UserDetailCtrl'
    });
  }
]);

})(angular);