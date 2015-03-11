angular.module('moviecatAnimations', ['ngAnimate']);


var moviecatControllers = angular.module('moviecatControllers', []);

moviecatControllers.controller('MovieListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/data/imdb250.json').success(function(data) {
      $scope.movies = data;
    });

    $scope.orderProp = 'rank';
  }]);

moviecatControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('/data/imdb250.json').success(function(data) {
      $scope.movie = data[$routeParams.rank-1];

      $scope.nextMovie = parseInt($routeParams.rank)+1;
      $scope.prevMovie = $routeParams.rank-1;

      if ($scope.nextMovie > 250)
        $scope.nextMovie = 1;
      if (parseInt($scope.prevMovie) < 1)
        $scope.prevMovie = 250;

    });

  }]);

moviecatControllers.controller('MovieGalleryCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/data/imdb250.json').success(function(data) {
      $scope.movieg = data;
    });
  }]);

moviecatControllers.controller('MovieTimelineCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/data/imdb250.json').success(function(data) {
    
      var year1940 = [];
      var year1950 = [];
      var year1960 = [];
      var year1970 = [];
      var year1980 = [];
      var year1990 = [];
      var year2000 = [];
      var year2010plus = [];

      for (i = 0; i < 250; i++){
        var release = data[i].released;
        var date = release.split(" ");
        var year = date[2];

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
     // console.log(year1940[0].released.split(" ")[2]);
      year1940.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1950.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1960.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1970.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1980.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year1990.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year2000.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});
      year2010plus.sort(function(a,b){return parseInt(a.released.split(" ")[2])-parseInt(b.released.split(" ")[2])});

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



var CompareAngular = angular.module('CompareAngular', []);

CompareAngular.controller('CompareAngularCtrl', function ($scope, $http) {
  $http.get('/data/college.json').success(function(data) {
    $scope.colleges = data;
  });

});