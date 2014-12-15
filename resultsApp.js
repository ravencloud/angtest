//Takes the page qa & release and grabs CNA or FNV incidents

var resultsApp = angular.module('resultsApp', []);
	
	resultsApp.controller('resultsCTRL', ['$scope', '$http', function($scope, $http) {
	
			$scope.getResults = function(){
				$scope.selectedQA = encodeURI(document.getElementById("qaList").value);
				$scope.selectedRelease = encodeURI(document.getElementById("releaseList").value);
				var report = "https://qa.custhelp.com/cc/fleet/report/165629?Status=111,3,110&Account=";
				report += $scope.selectedQA + "&TBII=" + $scope.selectedRelease + "&callback=JSON_CALLBACK";
				
				
				$http.jsonp(report)
				.success(function(data){
					$scope.results = [data.nodes];
			
					
				}).error(function(data, status, headers, config) {
					console.log("There was an error with the request"); 
				});
				
			};
		
		 $scope.orderProp = 'Reference #';
	}]);