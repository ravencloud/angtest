//Grabs the list of releases

var releaseApp = angular.module('releaseApp', []);
	
	releaseApp.controller('releaseCTRL', ['$scope', '$http', function($scope, $http) {
	
		var release = "https://qa.custhelp.com/cc/fleet/release?callback=JSON_CALLBACK";
		
		$http.jsonp(release)
		.success(function(data){
			$scope.releases = [data.nodes];
	
			
		}).error(function(data, status, headers, config) {
			console.log("There was an error with the request"); 
		});
		
		 $scope.orderProp = 'LookupName';
	}]);