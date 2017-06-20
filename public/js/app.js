
var app = angular.module('journal-app', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "templates/main.html",
    controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise("/");
});
