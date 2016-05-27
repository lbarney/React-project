angular.module("gifSpot").service("mainService", function($http) {

  this.findGif = function(key) {
      return $http({
        method: 'GET',
        url: "http://api.giphy.com/v1/gifs/search?q=" + key + "&api_key=dc6zaTOxFJmzC"
      }).then(function(response) {
          return response.data;
      });
    };

});
