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
    var userLikedPosts;
    $scope.getPosts = function() {
      var userPosts = postsService.collection(user);
      userLikedPosts = postsService.getLiked(user); 
      var posts = userPosts.concat(userLikedPosts);
      $scope.posts = posts.map(function (post) {
        post.user = usersService.get(post.username); // resolve users with username
        return post;
      });
    };
    $scope.getPosts();
    $scope.$root.$on('newPost', $scope.getPosts);

    // User feed 
    var userPosts = postsService.collection(user);
    var userLikedPosts = postsService.getLiked(user); 
    var posts = userPosts.concat(userLikedPosts);
    $scope.posts = posts.map(function (post) {
      post.user = usersService.get(post.username); // resolve users with username
      return post;
    });

    // Check if post is liked by user
    $scope.isLikedByUser = function (postId) {
      var likes = userLikedPosts.filter(function (post) {
        return post.id === postId;
      });
      if (likes.length) { return true };
    };

    $scope.followUser = function (username) {
      usersService.followUser(user, username);
    };

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
    });

    // Check if user is following another user
    $scope.isFollowing = function(username) {
      if ($scope.user.following.indexOf(username) > -1) { return true };
    };

    // Current tab
    var url = $location.url();
    $scope.currentTab = url.split('users/')[1].split('/')[1];
  }
]);

})(angular);