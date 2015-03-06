(function(angular, undefined){'use strict';

angular.module('users')

.controller('UserDetailCtrl', [
  '$scope',
  '$routeParams',
  'UsersService',
  'PostsService',
  function($scope, $routeParams, usersService, postsService) {
    var user = $routeParams.username;
    $scope.user = usersService.get(user);
    $scope.posts = postsService.collectionByUser(user);
  }
]);

})(angular);