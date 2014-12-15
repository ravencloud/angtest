//Grabs the list of staff accounts, will filter using returned field for qaEngineer in index.html

var qaEngineerApp = angular.module('qaEngineerApp', []);
	
	qaEngineerApp.controller('qaEngineerCTRL', ['$scope', '$http', function($scope, $http) {

		var qaEng = "https://qa.custhelp.com/cc/fleet/account?callback=JSON_CALLBACK";
		
		$http.jsonp(qaEng)
		.success(function(data){
			$scope.qaEngineers = [data.nodes];
	
			
		}).error(function(data, status, headers, config) {
			console.log("There was an error with the request"); 
		});
		
		$scope.orderProp = 'LookupName';
		
	}]); 
	

	


