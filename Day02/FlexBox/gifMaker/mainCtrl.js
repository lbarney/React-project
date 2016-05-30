angular.module("gifSpot").controller("mainCtrl", function($scope, mainService) {
  $scope.gifs = [];
  $scope.findGif = function(key) {
    mainService.findGif(key)
    .then(function(response) {
      $scope.gifs = response.data;
      console.log($scope.gifs);
    });
  };

});
