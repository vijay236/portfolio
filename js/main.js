

var myApp = angular.module('portfolioApp', ['ngRoute', 'ngAnimate']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './template/home.html' 
    })
    .when('/about', {
        templateUrl: './template/about.html'
    })
     .when('/work', {
         templateUrl: './template/work.html'
     })
      .when('/skills', {
          templateUrl: './template/skills.html'
     })
      .when('/contact', {
          templateUrl: './template/contact.html'
     })

   .otherwise({
       redirectTo: '/'
   });
});


  

