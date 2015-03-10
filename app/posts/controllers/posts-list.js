(function (angular) { 'use strict';

angular.module('posts')

.controller('PostsListCtrl', [
  '$scope',
  'PostsService',
  function ($scope, postsService) {
    $scope.posts = postsService.collection();

    $scope.filter = null;
  }
]);

})(angular);