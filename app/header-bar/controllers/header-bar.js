(function (angular) { 'use strict';

angular.module('headerBar')

.controller('HeaderBarCtrl', [
  '$scope',
  function ($scope) {
    $scope.user = {
      username: 'jessicatuan',
      name: 'Jessica Tuan',
      photo: 'img/user_tuan.jpg'
    }

    $scope.modalVisible = false;

    $scope.toggleModal = function () {
      $scope.modalVisible = !$scope.modalVisible;
    }
  }
]);

})(angular);