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
  }
]);

})(angular);