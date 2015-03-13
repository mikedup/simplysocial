(function (angular) { 'use strict';

angular.module('users')

.controller('UserSettingsCtrl', [
  '$scope',
  '$routeParams',
  'UsersService',
  function ($scope, $routeParams, usersService) {
    // User
    var user = $routeParams.username;
    $scope.user = usersService.get(user);
  }
]);

})(angular);