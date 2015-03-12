
var moviecatControllers = angular.module('moviecatControllers', []);

//LIST CONTROLLER
moviecatControllers.controller('MovieListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
      $scope.movies = data;
    });

    $scope.orderProp = 'rank';
}]);

//DETAIL CONTROLLER
moviecatControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
      $scope.movie = data[$routeParams.rank-1];

      //LEFT AND RIGHT ARROW EDGE CASES
      $scope.nextMovie = parseInt($routeParams.rank)+1;
      $scope.prevMovie = $routeParams.rank-1;

      if ($scope.nextMovie > 250)
        $scope.nextMovie = 1;
      if (parseInt($scope.prevMovie) < 1)
        $scope.prevMovie = 250;

    });
}]);

//GALLERY CONTROLLER
moviecatControllers.controller('MovieGalleryCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
      $scope.movieg = data;
    });
}]);

//TIMELINE CONTROLLER
moviecatControllers.controller('MovieTimelineCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
    
      //INIT DECADE ARRAYS
      var year1940 = [];
      var year1950 = [];
      var year1960 = [];
      var year1970 = [];
      var year1980 = [];
      var year1990 = [];
      var year2000 = [];
      var year2010plus = [];

      //FOR EVERY ITEM IN IMDB250.JSON, STORE INTO THE CORRESPONDING DECADE ARRAY
      for (i = 0; i < 250; i++){
        //GET THE RELEASED YEAR FROM A MOVIE ELEMENT
        var release = data[i].released;
        var date = release.split(" ");
        var year = date[2];

        //PUSH INTO THE CORRECT DECADE ARRAY
        if (year < 1950)
          year1940.push(data[i]);
        else if (year < 1960)
          year1950.push(data[i]);
        else if (year < 1970)
          year1960.push(data[i]);
        else if (year < 1980)
          year1970.push(data[i]);
        else if (year < 1990)
          year1980.push(data[i]);
        else if (year < 2000)
          year1990.push(data[i]);
        else if (year < 2010)
          year2000.push(data[i]);
        else
          year2010plus.push(data[i]);
      }

      //SORT THE DECADE ARRAYS BY ITS RELEASED YEAR (SO IT'S IN ORDER; RIGHT NOW ITS IN RANK ORDER)
      year1940.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1950.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1960.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1970.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1980.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1990.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year2000.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year2010plus.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});

      //DECLADE SCOPES
      $scope.year1940 = year1940;
      $scope.year1950 = year1950;
      $scope.year1960 = year1960;
      $scope.year1970 = year1970;
      $scope.year1980 = year1980;
      $scope.year1990 = year1990;
      $scope.year2000 = year2000;
      $scope.year2010plus = year2010plus;
  
      $scope.moviet = data;
    });


  }]);

//CONTROLLER FOR PART A/B EXTRA CREDIT. THIS HANDLES THE COLLEGES DATASET
//DATA OBTAINED FROM https://data.gov
var CompareAngular = angular.module('CompareAngular', []);
CompareAngular.controller('CompareAngularCtrl', function ($scope, $http) {
  $http.get('./data/college.json').success(function(data) {
    $scope.colleges = data;
  });
});