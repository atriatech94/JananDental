angular.module('myapp')
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'page/home/home.html',
        activetab: 'home'
    })
}])