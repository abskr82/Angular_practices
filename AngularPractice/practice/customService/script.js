var myApp = angular.module("myModule", []);


myApp.controller("myController", function($scope, squareService){
    $scope.getSquare = function(input){
        $scope.output = squareService.squareNumber(input);
    }
});
