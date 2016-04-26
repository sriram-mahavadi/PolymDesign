var app = angular.module('polymApp', ["ds.clock"]);

app.controller('TaskController',function($scope, $window, $http){
    // API endpoint details
    api_host = "utkarsg.desktop.amazon.com";
    api_port = 8500;
    api_prefix = "http://" + api_host + ":" + api_port + "/"
    
    $scope.userName = "";
	$scope.tasks = [];
    
	$scope.loadUserName = function() {
		dataToSend = {};
		url = api_prefix + 'userName';
		$http.get(url).then(function (response) {
			$scope.userName = response.data;
		});
	};
	
    $scope.loadTasks = function() {
		url = api_prefix + 'tasks';
		$http.get(url).then(function (response) {
			$scope.tasks = response.data;
		});
    };
    
    $scope.loadUserName();
    $scope.loadTasks();
    console.log($scope.tasks);
});

