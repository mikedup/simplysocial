(function(angular, undefined){'use strict';

angular.module('posts')

.factory('PostsService', function() {
  var service = {};
  var posts = [
    {
      "user": {
        "name": "Sam Soffes",
        "photo": "/img/user_soffes.jpg"
      },
      "text": "How to Get Inspired: the Right Way - Designmodo <a href>link</a>",
      "photo": "",
      "posted_time": "3m"
    },
    {
      "user": {
        "name": "Meg Robichaud",
        "photo": "/img/user_robichaud.jpg"
      },
      "text": "My view this morning is simply beautiful... <link>",
      "photo": "/img/post_ocean.jpg",
      "posted_time": "25m"
    },
    {
      "user": {
        "name": "Kerem Suer",
        "photo": "/img/user_suer.jpg"
      },
      "text": "8 Apps to Turn Your Pipe Dreams Into Prototypes <link>",
      "photo": "",
      "posted_time": "50m"
    },
    {
      "user": {
        "name": "Liang Shi",
        "photo": "/img/user_shi.jpg"
      },
      "text": "How to get animations out of your head. <link> Funny and useful",
      "photo": "",
      "posted_time": "1h"
    }
  ];

  service.collection = function() {
    return posts;
  }

  return service;
  
});

})(angular);
