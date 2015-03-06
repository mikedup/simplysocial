(function(angular, undefined){'use strict';

angular.module('posts')

.factory('PostsService', [
  '$filter',
  function() {
    var service = {};
    var posts = [
      {
        "user": {
          "username": "samsoffes",
          "name": "Sam Soffes",
          "photo": "/img/user_soffes.jpg"
        },
        "text": "How to Get Inspired: the Right Way - Designmodo <a href>link</a>",
        "photo": "",
        "posted_time": "3m"
      },
      {
        "user": {
          "username": "megrobichaud",
          "name": "Meg Robichaud",
          "photo": "/img/user_robichaud.jpg"
        },
        "text": "My view this morning is simply beautiful... <link>",
        "photo": "/img/post_ocean.jpg",
        "posted_time": "25m"
      },
      {
        "user": {
          "username": "keremsuer",
          "name": "Kerem Suer",
          "photo": "/img/user_suer.jpg"
        },
        "text": "8 Apps to Turn Your Pipe Dreams Into Prototypes <link>",
        "photo": "",
        "posted_time": "50m"
      },
      {
        "user": {
          "username": "liangshi",
          "name": "Liang Shi",
          "photo": "/img/user_shi.jpg"
        },
        "text": "How to get animations out of your head. <link> Funny and useful",
        "photo": "",
        "posted_time": "1h"
      },
       {
        "user": {
          "username": "jessicatuan",
          "name": "Jessica Tuan",
          "photo": "/img/user_tuan.jpg"
        },
        "text": "It's Monday. That means <a href>@happymonday</a> podcast time. <a href>http://bit.ly/1hxqkGO</a> Good stuff for web workers.",
        "photo": "",
        "posted_time": "3m"
      },
    ];

    service.collection = function() {
      return posts;
    },

    service.collectionByUser = function(id) {
      var userPosts= [];

      angular.forEach(posts, function(post) {
        if (post.user.username === id) {
          this.push(post);
        }
      }, userPosts);
      
      return userPosts;
    }

    return service;
    
  }
]);

})(angular);
