angular

.module('starter',['ionic'])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        // Set cache limit for templates 
        $ionicConfigProvider.views.maxCache(15);

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/one.html',
                controller: 'OneController'
            })
        $stateProvider
            .state('checklist', {
                url: '/checklist',
                templateUrl: '/views/two.html'
            })
  $urlRouterProvider.otherwise("/");

})