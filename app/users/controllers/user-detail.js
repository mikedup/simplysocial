(function (angular) { 'use strict';

angular.module('users')

.controller('UserDetailCtrl', [
  '$scope',
  '$routeParams',
  'UsersService',
  'PostsService',
  function ($scope, $routeParams, usersService, postsService) {
    var user = $routeParams.username;
    var userPosts = postsService.collectionByUser(user);
    var userLikes = postsService.collectionUserLikes(user);

    $scope.user = usersService.get(user);
    $scope.posts = userPosts.concat(userLikes);

  }
]);

})(angular);