(function (angular) { 'use strict';

angular.module('posts')

.controller('PostsListCtrl', [
  '$scope',
  'PostsService',
  'UsersService',
  function ($scope, postsService, usersService) {
    $scope.getPosts = function() {
      var posts = postsService.collection();
      $scope.posts = posts.map(function (post) {
        var user = usersService.get(post.username); // Resolve users with username
        post.user = user;
        return post;
      });
    };
    $scope.getPosts();
    $scope.$root.$on('newPost', $scope.getPosts);

    $scope.filter = null;
  }
]);

})(angular);