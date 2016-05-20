var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope,$http) {
	// body...
	$scope.textBox = "";
	$http({
		  	method: 'GET',
		  	url: '/fetchData'
		  }).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    $scope.cars = response.data;
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	$scope.count = 0;
	$scope.selVals = {};
	$scope.selCheck = function(a){
		if($scope.selVals[a]){
				$scope.count += 1;
			}
		else
		{			
			$scope.count -= 1;
		}

		if($scope.count > 3){
			alert("Max three selection only allowed !!");
			$scope.selVals[a] = 0;	
		}
		
	}
	$scope.compareSelected = function(selVals,type){
		var carArr = [];
		for (key in selVals){
			if(selVals[key]){
				carArr.push(key); /*push selected car to this array*/
			}
		}
		// alert(carObjArr);
		var carObjArr = [];
		// push matched object to carObjArr
		carArr.forEach(function(carName){
			$scope.cars.forEach(function(carObj){
				if(carObj.name === carName){
					carObjArr.push(carObj);
				}
			});
		});

		// Create an array of objects to display data
		var mainObjArr = [];
		for(var k in carObjArr[0]){
			mainObjArr.push({});
			mainObjArr[mainObjArr.length-1] = {};
			mainObjArr[mainObjArr.length-1]["feature"] = k;
			for(var i = 0; i < carObjArr.length;i++){
				mainObjArr[mainObjArr.length-1][carObjArr[i].name] = carObjArr[i][k];
			}
		}
		
		if (type == "all"){
			$scope.dta = mainObjArr;
		}
		else if ( type == "similar"){
			var similarObjArr = [] ;
			mainObjArr.forEach(function(obj){
				var count = 0;
				var similarCount = 0;
				var prevObjVal = "";
				for(var s in obj){
					if(s != "feature" && count >0){ /*exclude feature field*/
						if(prevObjVal === obj[s]){
							similarCount += 1;
						}
					}
					count+=1;
					prevObjVal = obj[s];
				}
				// check if the similaCount equal to count -2  then add the value to the array
				if( similarCount === count - 2 ){
					similarObjArr.push(obj);
				}
			});
			$scope.dta = similarObjArr;
		}
		else if( type == "diff" ){
			var diffObjArr = [] ;
			mainObjArr.forEach(function(obj){
				var count = 0;
				var similarCount = 0;
				var prevObjVal = "";
				for(var s in obj){
					if(s != "feature" && count >0){ /*exclude feature field*/
						if(prevObjVal === obj[s]){
							similarCount += 1;
						}
					}
					count+=1;
					prevObjVal = obj[s];
				}
				// check if the similarFlag is 0 then add the value to the array
				if( similarCount === 0 ){
					diffObjArr.push(obj);
				}
			});
			$scope.dta = diffObjArr;
		}
	}
});
