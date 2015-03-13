(function (angular) { 'use strict';

angular.module('users')

.factory('UsersService', [
  '$filter', 
  function ($filter) {
    var service = {};

    // Mock data
    var users = [
      {
        "username": "jessicatuan",
        "name": "Jessica Tuan",
        "photo": "/img/user_tuan.jpg",
        "bio": "Designer and Developer living in San Diego, CA",
        "website": "jessicatuan.com",
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
        "followers": [
          "megrobichaud",
          "keremsuer",
          "liangshi",
          "pallavigupta"
        ],
        "following": [
          "megrobichaud",
          "pallavigupta"
        ]
      },
      {
        "username": "megrobichaud",
        "name": "Meg Robichaud",
        "photo": "/img/user_robichaud.jpg",
        "bio": "",
        "website": "",
        "followers": [
          "samsoffes",
          "keremsuer",
          "liangshi",
          "pallavigupta"
        ],
        "following": [
          "samsoffes",
          "pallavigupta"
        ]
      },
      {
        "username": "keremsuer",
        "name": "Kerem Suer",
        "photo": "/img/user_suer.jpg",
        "bio": "",
        "website": "",
        "followers": [
          "samsoffes",
          "megrobichaud",
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
        "username": "liangshi",
        "name": "Liang Shi",
        "photo": "/img/user_shi.jpg",
        "bio": "",
        "website": "",
        "followers": [
          "samsoffes",
          "megrobichaud",
          "keremsuer",
          "pallavigupta"
        ],
        "following": [
          "samsoffes",
          "megrobichaud",
          "pallavigupta"
        ]
      },
      {
        "username": "pallavigupta",
        "name": "Pallavi Gupta",
        "photo": "/img/user_gupta.jpg",
        "bio": "",
        "website": "",
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
      }
    ];

    service.get = function (username) {
      // Mock api GET
      var user = users.filter(function (user) {
        return user.username === username;
      })[0];

      return user;
    }

    service.resolveUsers = function (usernames) {
      var resolvedUsers = usernames.map(function (username) {
        return this.get(username);
      }.bind(this));

      return resolvedUsers;
    }

    service.followUser = function (username, newFollow) {
      var user = this.get(username);
      user.following.push(newFollow);
    }

    return service;
  }
]);

})(angular);
