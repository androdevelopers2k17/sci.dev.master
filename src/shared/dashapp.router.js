var dashApp = angular.module("dashApp", ["ngRoute"]);
dashApp.config(function($routeProvider) {
    debugger
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
    })
    .when("/login", {
        templateUrl : "src/index.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});