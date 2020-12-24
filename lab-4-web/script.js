(function () {
  'use strict';

  const products = {
    buy: [
      { id: 1, name: "яблук", quantity: 10},
      { id: 2, name: "картоплин", quantity: 20 },
      { id: 3, name: "апельсини", quantity: 3},
      { id: 4, name: "помідор", quantity: 6},
      { id: 5, name: "цибулин", quantity: 8}
    ],
    bougth: []
  };

  const my_list = angular.module("my_list", []);

  my_list.controller("buy", function ($scope) {
    $scope.data = products;
    $scope.buy = function (id) {
      $scope.data.bougth.push($scope.data.buy.find(item => item.id == id))
      $scope.data.buy.splice($scope.data.buy.indexOf($scope.data.buy.find(item => item.id == id)), 1)
    }
  });

  my_list.controller("bought", function ($scope) {
    $scope.data = products;
  });

})();