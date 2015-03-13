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
    var userLikedPosts = postsService.resolvePosts($scope.user.likes); // resolve posts with post ids
    var likes = userLikedPosts.map(function (post) { 
      post.likedByUser = true; // add flag to identify posts as liked in the feed
      return post;
    });
    var posts = userPosts.concat(likes);
    $scope.posts = posts.map(function (post) {
      var user = usersService.get(post.username); // Resolve users with username
      post.user = user;
      return post;
    });


    // Followers and Following - reolve users with usernames
    $scope.followers = usersService.resolveUsers($scope.user.followers);
    $scope.following = usersService.resolveUsers($scope.user.following);

    // Current tab
    var url = $location.url();
    $scope.currentTab = url.split('users/')[1].split('/')[1];
  }
]);

})(angular);