(function(angular, undefined){'use strict';

angular.module('users')

.factory('UsersService', [
  '$filter', 
  function($filter) {
    var service = {};
    var users = [
      {
        "username": "jessicatuan",
        "name": "Jessica Tuan",
        "photo": "/img/user_tuan.jpg",
        "bio": "Designer and Developer living in San Diego, CA",
        "posts": [],
        "followers": [],
        "following": []
      },
      {
        "username": "samsoffees",
        "name": "Sam Soffes",
        "photo": "/img/user_soffes.jpg",
        "bio": "",
        "posts": [],
        "followers": [],
        "following": []
      },
      {
        "username": "megrobichaud",
        "name": "Meg Robichaud",
        "photo": "/img/user_robichaud.jpg",
        "bio": "",
        "posts": [],
        "followers": [],
        "following": []
      },
      {
        "username": "keremsuer",
        "name": "Kerem Suer",
        "photo": "/img/user_suer.jpg",
        "bio": "",
        "posts": [],
        "followers": [],
        "following": []
      },
      {
        "username": "liangshi",
        "name": "Liang Shi",
        "photo": "/img/user_shi.jpg",
        "bio": "",
        "posts": [],
        "followers": [],
        "following": []
      }
    ];

    service.get = function(id) {
      // Simulate api 
      var user = $filter('filter')(users, {username: id})[0];

      return user;
    }

    return service;
  }
]);

})(angular);
