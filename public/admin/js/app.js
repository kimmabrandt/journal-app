var adminApp = angular.module('admin-app', [
  'ui.router',
  'btford.markdown'
]);

adminApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('allPosts', {
      url: '/',
      templateUrl: '/admin/templates/allPosts.html'
    })
    .state('addPost', {
      url: '/addPost',
      templateUrl: '/admin/templates/addPost.html'
    })
});
