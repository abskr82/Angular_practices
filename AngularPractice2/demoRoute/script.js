var app = angular.module('Demo',["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl:"home.html",
                controller:"homeController"
            })
            .when("/name",{
                templateUrl:"name.html",
                controller:"nameController"
            })
    })
    .controller('homeController',function($scope) {
        $scope.message = "Some message";
    })
    .controller('nameController',function($scope) {
        $scope.message = "Name"
    })
