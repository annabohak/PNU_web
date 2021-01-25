(function () {
  'use strict';
  //angular.module('mod', [])
        //.controller('toyController', ToyController)
        //.provider('toyService', Provider);
  const toys = {
    buy: [
      { id: 1, name: "пожежних машинок", quantity: 10},
      { id: 2, name: "машинок", quantity: 20 },
      { id: 3, name: "ляльки", quantity: 3},
      { id: 4, name: "м'ячі", quantity: 6},
      { id: 5, name: "коробок", quantity: 8},
      { id: 5, name: "гірок", quantity: 8}
    ],
    bougth: []
  };
  //function Provider(){
        //var provider = this;
        //provider.$get = function(){
            //return service;}}
  const my_list = angular.module("my_list", []);

  my_list.controller("buy", function ($scope) {
    $scope.data = toys;
    $scope.buy = function (id) {
      $scope.data.bougth.push($scope.data.buy.find(item => item.id == id))
      $scope.data.buy.splice($scope.data.buy.indexOf($scope.data.buy.find(item => item.id == id)), 1)
    }
  });

  //service.delete = function(index){
    //.splice();}
  //service.hide = function(index){}


})();