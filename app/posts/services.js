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
        "username": "samsoffes",
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
        "username": "megrobichaud",
        "text": "My view this morning is simply beautiful... <link>",
        "photo": "/img/post_ocean.jpg",
        "video": "",
        "posted_time": "25m",
        "likes": []
      },
      {
        "id": "f495aaf2-a536-4657-88f1-5f22fe5fa4ce",
        "username": "keremsuer",
        "text": "8 Apps to Turn Your Pipe Dreams Into Prototypes <link>",
        "photo": "",
        "video": "",
        "posted_time": "50m",
        "likes": []
      },
      {
        "id": "fc1fefe9-88b3-4ac9-aea9-6c4b94adb556",
        "username": "liangshi",
        "text": "How to get animations out of your head. <link> Funny and useful",
        "photo": "",
        "video": "",
        "posted_time": "1h",
        "likes": []
      },
      {
        "id": "51526dad-0e63-41a8-be87-dd3dd3a566dc",
        "username": "jessicatuan",
        "text": "It's Monday. That means <a href>@happymonday</a> podcast time. <a href>bit.ly/1hxqkGO</a> Good stuff for web workers.",
        "photo": "",
        "video": "",
        "posted_time": "3m",
        "likes": []
      },
      {
        "id": "ad941be0-67cd-4977-8919-aa844d5ebb3c",
        "username": "jessicatuan",
        "text": "The theme song of small creative shops around the world. <a href>http://goo.gl/eFUAzP</a>",
        "photo": "",
        "video": "",
        "posted_time": "1h",
        "likes": []
      },
      {
        "id": "39587009-c79f-4cff-ad94-1112af2324e3",
        "username": "jessicatuan",
        "text": "Nothing like a walk on the beach to clear your mind",
        "photo": "/img/post_beach.jpg",
        "video": "",
        "posted_time": "2h",
        "likes": []
      },
      {
        "id": "b6e83b20-3650-4a50-8675-f10f790a1fd5",
        "username": "pallavigupta",
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
      var post = posts.filter(function (post) {
        return post.id === postId;
      })[0];

      return post;
    }

    service.collection = function (username) {
      // Mock api GET
      if (username) {
        var userPosts = posts.filter(function (post) {
          return post.username === username;
        });

        return userPosts;
      }

      return posts;
    }

    service.resolvePosts = function (postIds) {
      var resolvedPosts = postIds.map(function (postId) {
        return this.get(postId);
      }.bind(this));

      return resolvedPosts;
    }

    return service;
    
  }
]);

})(angular);
