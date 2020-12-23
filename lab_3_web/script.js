(function () {
  'use strict';

  angular.module('Lab3', []).controller('Lab3Controller', Lab3Controller);

  function Lab3Controller($scope) {
    $scope.main = function() {
      if ($scope.products) {
        var product = $scope.products.split(',');
        var counter = 0;
        product.forEach(element => {
          element = element.trim();
          if (element) {
            counter++;
          }
        });
        if (counter > 3) {
          $scope.note = 'Це забагато!';
        } else {
          $scope.note = 'На здоров’я!';
        }
      } else {
        $scope.note = 'Будь ласка, уведіть дані!';
      }
    };
  }
})();