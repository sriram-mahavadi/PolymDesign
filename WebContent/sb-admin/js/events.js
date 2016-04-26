var app = angular.module('polymApp', ["ds.clock", 'ngDialog']);

app.controller('EventController', function($scope, $window, ngDialog, $http){
    $scope.events = [];
    $scope.tasks = [];
    
    $scope.classifyEvent = function(event) {
	    ngDialog.open({
	        template: 'Event: {{event.heading}}' +
	        		  '<p>{{event.summary}}</p>' +
	        		  '<p>Apply to Task: <input type="text" ng-model="searchTask" class="form-control"></p>' +
	        		  '<div class="panel panel-default" ng-repeat="task in tasks|filter:searchTask">' +
	        		  '<a href="#">' +
		  	          	'<div class="panel-heading">' +
		  	          		'<p style="float:right">' +
		  	          			'<a href="#"><i class="fa fa-check-square-o fa-fw"></i></a>&nbsp;&nbsp;&nbsp;' +
		  	          		'</p>' +
		  	          		'{{task.heading}}' +
		  	          	'</div></a>' +
		               	'<div class="panel-body"><p>{{task.summary}}</p></div>' +
		            	'</div>' +
		              '</div>',
	        plain: true,
	        scope: $scope
	    });
	};
    $scope.removeEvent = function(event) {
    	var i;
        for(i = $scope.events.length - 1; i >= 0; i--){
            if($scope.events[i].id == event.id){
                $scope.events.splice(i,1);
            }
        }
	};
	$scope.getEvent = function(eventId) {
		var event;
		for(event in $scope.events) {
			if(event.id == eventId) {
				return event;
			}
		}
		return null;
	};
	
    $scope.loadDummyEvents = function() {
    	var i;
    	for(i=0; i<10; i++) {
    		var event = {};
    		event.id = i;
    		event.heading = "event heading " + i;
    		event.summary = "event summary " + i;
    		event.description = "event description " + i;
    		event.creationDate = "event additiondate" + i;
    		$scope.events.push(event);
    	}

    };
    $scope.loadDummyTasks = function() {
    	var i;
    	for(i=0; i<10; i++) {
    		var task = {};
    		task.id = i;
    		task.heading = "task heading " + i;
    		task.summary = "task summary " + i;
    		task.description = "task description " + i;
    		task.creationDate = "task additiondate" + i;
    		$scope.tasks.push(task);
    	}
    };
    
    $scope.loadDummyTasks();
    $scope.loadDummyEvents();
    
});

