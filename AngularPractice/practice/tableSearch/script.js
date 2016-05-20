var myApp = angular.module("myModule", []);

myApp.controller("myController", function($scope){
    $scope.msg = "Some msg";
    stData =[
        { name:"ab3",age:23,sal:100 },
        { name:'bc',age:26,sal:101 },
        { name:'ab1',age:21,sal:106 },
        { name:'ab2',age:29,sal:108 }
    ];
    $scope.stData = stData;

    $scope.sortCol = "name";
    $scope.reverseSort = false;
    $scope.sortData = function(column){
        $scope.reverseSort = ($scope.sortCol == column)? !$scope.reverseSort : false;
        $scope.sortCol = column;

    }
});
