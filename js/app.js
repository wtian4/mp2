var moviecatApp = angular.module('moviecatApp', [
  'ngRoute',
  'moviecatControllers',
  'ngAnimate'
]);

//ROUTES
moviecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'partials/list.html',
        controller: 'MovieListCtrl'
      }).
      when('/movies/:rank', {
        templateUrl: 'partials/details.html',
        controller: 'MovieDetailCtrl'
      }).
       when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'MovieGalleryCtrl'
      }).
       when('/timeline', {
        templateUrl: 'partials/timeline.html',
        controller: 'MovieTimelineCtrl'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);


//LOAD FOUNDATION CORRECTLY
moviecatApp.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
    });
});


