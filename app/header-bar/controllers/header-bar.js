(function (angular) { 'use strict';

angular.module('headerBar')

.controller('HeaderBarCtrl', [
  '$scope',
  'PostsService',
  function ($scope, postsService) {

    $scope.user = {
      username: 'jessicatuan',
      name: 'Jessica Tuan',
      photo: 'img/user_tuan.jpg'
    }

    $scope.modalVisible = false;

    $scope.toggleModal = function () {
      $scope.modalVisible = !$scope.modalVisible;
    }

    $scope.createPost = function(message) {
      if (message) {
        var newPost = postsService.create($scope.user, message);
        $scope.$root.$broadcast('newPost');
        $scope.toggleModal();
        $scope.postMessage = '';
      }
    };
  }
]);

})(angular);