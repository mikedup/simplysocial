(function (angular) { 'use strict';

angular.module('users')

.controller('UserDetailCtrl', [
  '$scope',
  '$routeParams',
  '$location',
  'UsersService',
  'PostsService',
  function ($scope, $routeParams, $location, usersService, postsService) {
    // User
    var user = $routeParams.username;
    $scope.user = usersService.get(user);

    // User feed 
    var userPosts = postsService.collection(user);
    var userLikedPosts = postsService.configurePosts($scope.user.likes);
    $scope.posts = userPosts.concat(userLikedPosts);

    // Followers and Following
    $scope.followers = usersService.configureUsers($scope.user.followers);
    $scope.following = usersService.configureUsers($scope.user.following);

    // Current tab
    var url = $location.url();
    $scope.currentTab = url.split('users/')[1].split('/')[1];
  }
]);

})(angular);