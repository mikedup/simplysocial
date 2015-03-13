(function (angular) { 'use strict';

angular.module('posts')

.config([
  '$routeProvider', 
  function ($routeProvider) {
    $routeProvider.when('/', {
      title: 'Posts',
      templateUrl: 'app/posts/templates/list.html',
      controller: 'PostsListCtrl'
    });
  }
]);

})(angular);