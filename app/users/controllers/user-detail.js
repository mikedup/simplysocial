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
      post.user = usersService.get(post.username); // resolve users with username
      return post;
    });


    // Followers and Following - resolve users with usernames
    var followers = usersService.resolveUsers($scope.user.followers);
    var following = usersService.resolveUsers($scope.user.following);
    $scope.followers = followers.map(function (user) {
      user.posts = postsService.collection(user.username); // get user posts
      return user;
    });
    $scope.following = following.map(function (user) {
      user.posts = postsService.collection(user.username); // get user posts
      return user;
    })

    // Check if user is following another user
    $scope.isFollowing = function(username) {
      if ($scope.user.following.indexOf(username) > -1) { return true };
    }

    // Current tab
    var url = $location.url();
    $scope.currentTab = url.split('users/')[1].split('/')[1];
  }
]);

})(angular);