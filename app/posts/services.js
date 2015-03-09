(function (angular) { 'use strict';

angular.module('posts')

.factory('PostsService', [
  '$filter',
  function ($filter) {
    var service = {};

    // Mock data
    var posts = [
      {
        "id": "928ab8d7-e6c2-47ba-9a8c-92e4b38481b3",
        "user": {
          "username": "samsoffes",
          "name": "Sam Soffes",
          "photo": "/img/user_soffes.jpg"
        },
        "text": "How to Get Inspired: the Right Way - Designmodo <a href>link</a>",
        "photo": "",
        "video": "",
        "posted_time": "3m",
        "likes": [
          "jessicatuan"
        ]
      },
      {
        "id": "cb269c46-53fa-43cf-b2b3-6877bc8da660",
        "user": {
          "username": "megrobichaud",
          "name": "Meg Robichaud",
          "photo": "/img/user_robichaud.jpg"
        },
        "text": "My view this morning is simply beautiful... <link>",
        "photo": "/img/post_ocean.jpg",
        "video": "",
        "posted_time": "25m",
        "likes": []
      },
      {
        "id": "f495aaf2-a536-4657-88f1-5f22fe5fa4ce",
        "user": {
          "username": "keremsuer",
          "name": "Kerem Suer",
          "photo": "/img/user_suer.jpg"
        },
        "text": "8 Apps to Turn Your Pipe Dreams Into Prototypes <link>",
        "photo": "",
        "video": "",
        "posted_time": "50m",
        "likes": []
      },
      {
        "id": "fc1fefe9-88b3-4ac9-aea9-6c4b94adb556",
        "user": {
          "username": "liangshi",
          "name": "Liang Shi",
          "photo": "/img/user_shi.jpg"
        },
        "text": "How to get animations out of your head. <link> Funny and useful",
        "photo": "",
        "video": "",
        "posted_time": "1h",
        "likes": []
      },
      {
        "id": "51526dad-0e63-41a8-be87-dd3dd3a566dc",
        "user": {
          "username": "jessicatuan",
          "name": "Jessica Tuan",
          "photo": "/img/user_tuan.jpg"
        },
        "text": "It's Monday. That means <a href>@happymonday</a> podcast time. <a href>bit.ly/1hxqkGO</a> Good stuff for web workers.",
        "photo": "",
        "video": "",
        "posted_time": "3m",
        "likes": []
      },
      {
        "id": "ad941be0-67cd-4977-8919-aa844d5ebb3c",
        "user": {
          "username": "jessicatuan",
          "name": "Jessica Tuan",
          "photo": "/img/user_tuan.jpg"
        },
        "text": "The theme song of small creative shops around the world. <a href>http://goo.gl/eFUAzP</a>",
        "photo": "",
        "video": "",
        "posted_time": "1h",
        "likes": []
      },
      {
        "id": "39587009-c79f-4cff-ad94-1112af2324e3",
        "user": {
          "username": "jessicatuan",
          "name": "Jessica Tuan",
          "photo": "/img/user_tuan.jpg"
        },
        "text": "Nothing like a walk on the beach to clear your mind",
        "photo": "/img/post_beach.jpg",
        "video": "",
        "posted_time": "2h",
        "likes": []
      },
      {
        "id": "b6e83b20-3650-4a50-8675-f10f790a1fd5",
        "user": {
          "username": "pallavigupta",
          "name": "Pallavi Gupta",
          "photo": "/img/user_gupta.jpg"
        },
        "text": "Need some reading? 11 free ebooks for designers | Creative Bloq <a href>bit.ly/1hxqkGO</a> via <a href>@netmag</a>",
        "photo": "",
        "video": "",
        "posted_time": "2h",
        "likes": [
          "jessicatuan"
        ]
      }
    ];

    service.get = function (postId) {
      // Mock api GET
      var post = $filter('filter')(posts, {id: postId})[0];

      return post;
    }

    service.collection = function (userId) {
      // Mock api GET
      if (userId) {
        var userPosts = [];

        angular.forEach(posts, function (post) {
          if (post.user.username === userId) {
            this.push(post);
          }
        }, userPosts);

        return userPosts;
      }

      return posts;
    }

    service.configurePosts = function (postIds) {
      var posts = [];
      var self = this;

      angular.forEach(postIds, function (postId) {
        var post = self.get(postId);

        // add flag to identify post as liked in the feed
        post.likedByUser = true;

        this.push(post);
      }, posts);

      return posts;
    }

    return service;
    
  }
]);

})(angular);
