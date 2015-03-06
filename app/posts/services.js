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
        "posted_time": "3m",
        "likes": [
          {
            "user": "jessicatuan"
          }
        ]
      },
      {
        "user": {
          "username": "megrobichaud",
          "name": "Meg Robichaud",
          "photo": "/img/user_robichaud.jpg"
        },
        "text": "My view this morning is simply beautiful... <link>",
        "photo": "/img/post_ocean.jpg",
        "posted_time": "25m",
        "likes": []
      },
      {
        "user": {
          "username": "keremsuer",
          "name": "Kerem Suer",
          "photo": "/img/user_suer.jpg"
        },
        "text": "8 Apps to Turn Your Pipe Dreams Into Prototypes <link>",
        "photo": "",
        "posted_time": "50m",
        "likes": []
      },
      {
        "user": {
          "username": "liangshi",
          "name": "Liang Shi",
          "photo": "/img/user_shi.jpg"
        },
        "text": "How to get animations out of your head. <link> Funny and useful",
        "photo": "",
        "posted_time": "1h",
        "likes": []
      },
      {
        "user": {
          "username": "jessicatuan",
          "name": "Jessica Tuan",
          "photo": "/img/user_tuan.jpg"
        },
        "text": "It's Monday. That means <a href>@happymonday</a> podcast time. <a href>bit.ly/1hxqkGO</a> Good stuff for web workers.",
        "photo": "",
        "posted_time": "3m",
        "likes": []
      },
      {
        "user": {
          "username": "jessicatuan",
          "name": "Jessica Tuan",
          "photo": "/img/user_tuan.jpg"
        },
        "text": "The theme song of small creative shops around the world. <a href>http://goo.gl/eFUAzP</a>",
        "photo": "",
        "posted_time": "1h",
        "likes": []
      },
      {
        "user": {
          "username": "jessicatuan",
          "name": "Jessica Tuan",
          "photo": "/img/user_tuan.jpg"
        },
        "text": "Nothing like a walk on the beach to clear your mind",
        "photo": "/img/post_beach.jpg",
        "posted_time": "2h",
        "likes": []
      },
      {
        "user": {
          "username": "pallavigupta",
          "name": "Pallavi Gupta",
          "photo": "/img/user_gupta.jpg"
        },
        "text": "Need some reading? 11 free ebooks for designers | Creative Bloq <a href>bit.ly/1hxqkGO</a> via <a href>@netmag</a>",
        "photo": "",
        "posted_time": "2h",
        "likes": [
          {
            "user": "jessicatuan"
          }
        ]
      }
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
    },

    service.collectionUserLikes = function(id) {
      var userLikes= [];

      angular.forEach(posts, function(post) {
        angular.forEach(post.likes, function(like) {
          if (like.user === id) {

            // add flag to identify post as liked
            post.likedByUser = true;

            this.push(post);
          }
        }, userLikes)
        
      });
      
      return userLikes;
    }

    return service;
    
  }
]);

})(angular);
