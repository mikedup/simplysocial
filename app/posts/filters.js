(function (angular) { 'use strict';

angular.module('posts')

.filter('postsFilter', function() {
  return function (posts, filter) {
    if (!filter) return posts;
    return posts.filter(function(post) {
      return post[filter] !== '';
    });
  }
});

})(angular);