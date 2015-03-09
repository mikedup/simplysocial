(function (angular) { 'use strict';

angular.module('posts')

.filter('postsFilter', function() {
  return function (posts, filter) {
    
    if (filter === 'photo') {
      var photoPosts = [];

      angular.forEach(posts, function (post) {
        if (post.photo !== '') {
          this.push(post);
        }
      }, photoPosts);

      return photoPosts;
    }

    if (filter === 'video') {
      var videoPosts = [];

      angular.forEach(posts, function (post) {
        if (post.video !== '') {
          this.push(post);
        }
      }, videoPosts);

      return videoPosts;
    } else {
      return posts;
    }
  }
});

})(angular);