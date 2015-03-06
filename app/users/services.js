(function (angular) { 'use strict';

angular.module('users')

.factory('UsersService', [
  '$filter', 
  function ($filter) {
    var service = {};
    var users = [
      {
        "username": "jessicatuan",
        "name": "Jessica Tuan",
        "photo": "/img/user_tuan.jpg",
        "bio": "Designer and Developer living in San Diego, CA",
        "website": "jessicatuan.com",
        "posts": [],
        "likes": [],
        "followers": [],
        "following": []
      },
      {
        "username": "samsoffees",
        "name": "Sam Soffes",
        "photo": "/img/user_soffes.jpg",
        "bio": "",
        "website": "",
        "posts": [],
        "likes": [],
        "followers": [],
        "following": []
      },
      {
        "username": "megrobichaud",
        "name": "Meg Robichaud",
        "photo": "/img/user_robichaud.jpg",
        "bio": "",
        "website": "",
        "posts": [],
        "likes": [],
        "followers": [],
        "following": []
      },
      {
        "username": "keremsuer",
        "name": "Kerem Suer",
        "photo": "/img/user_suer.jpg",
        "bio": "",
        "website": "",
        "posts": [],
        "likes": [],
        "followers": [],
        "following": []
      },
      {
        "username": "liangshi",
        "name": "Liang Shi",
        "photo": "/img/user_shi.jpg",
        "bio": "",
        "website": "",
        "posts": [],
        "likes": [],
        "followers": [],
        "following": []
      },
      {
        "username": "pallavigupta",
        "name": "Pallavi Gupta",
        "photo": "/img/user_gupta.jpg",
        "bio": "",
        "website": "",
        "posts": [],
        "likes": [],
        "followers": [],
        "following": []
      }
    ];

    service.get = function (id) {
      // Simulate api 
      var user = $filter('filter')(users, {username: id})[0];

      return user;
    }

    return service;
  }
]);

})(angular);
