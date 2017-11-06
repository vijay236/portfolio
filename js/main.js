

var myApp = angular.module("portfolioApp", ['ngRoute','ngAnimate']);

myApp.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: '../template/home.html' 
    })
    .when("/about", {
        templateUrl: '../template/about.html'
    })
     .when("/work", {
         templateUrl: '../template/work.html'
     })
      .when("/skills", {
          templateUrl: '../template/skills.html'
     })
      .when("/contact", {
          templateUrl: '../template/contact.html'
     })

   .otherwise({
       redirectTo: '/home'
   });
    $locationProvider.html5Mode(true);
}]);


//   function menuCtrl($scope, $location) { 

//     $scope.goTo = function (path) {
//         $location.path(path);
//     };
// };

