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
        "likes": [
          "928ab8d7-e6c2-47ba-9a8c-92e4b38481b3",
          "b6e83b20-3650-4a50-8675-f10f790a1fd5"
        ],
        "followers": [
          "samsoffes",
          "megrobichaud",
          "keremsuer",
          "liangshi",
          "pallavigupta"
        ],
        "following": [
          "samsoffes",
          "megrobichaud",
          "pallavigupta"
        ]
      },
      {
        "username": "samsoffes",
        "name": "Sam Soffes",
        "photo": "/img/user_soffes.jpg",
        "bio": "",
        "website": "",
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

    service.configureUsers = function (userIds) {
      var users = [];
      var self = this;

      angular.forEach(userIds, function (userId) {
        var user = self.get(userId);
        this.push(user);
      }, users);

      return users;
    }

    return service;
  }
]);

})(angular);
