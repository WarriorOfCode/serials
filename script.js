angular
	.module('serials', ['ngRoute', 'ngResource'])
	.factory('Serial', ['$resource', Serial])
	.controller('SerialsListCtrl', ['$scope', '$http', 'Serial', SerialsListCtrl])
	.controller('SerialCtrl', ['$scope', '$routeParams', '$http', SerialCtrl])
	.directive('serialBloc', ['$document', serialBloc])
	.directive('serialTabs', [ serialTabs])
	.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'templates/serials-list.html',
				controller: 'SerialsListCtrl',
			}).
			when('/serial/:id', {
				templateUrl: 'templates/serial.html',
				controller: 'SerialCtrl',
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);


	function Serial($resource){
		return $resource('serials/:id.json', {}, {
			query: {method:'GET', params:{id:'serials'}, isArray:true}
		});
	};


function SerialCtrl($scope, $routeParams, $http) {
		$http.get('serials/' + $routeParams.id + '.json')
		.success(function(data) {
			$scope.serial = data;
			$scope.seasons = data.seasons;
		});
	};

function SerialsListCtrl($scope, $http, Serial) {
	$scope.serials = Serial.query();
}

function serialBloc($document){
	return {
		link: function(scope, element, attrs){
			element.css({
				width: "250px",
				height: "300px",
				"margin": 20
				});
		}};
};


function serialTabs() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@', seasons: '=', selected: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      scope.select = function(active){
      	scope.selected = active;

      }
      if (!scope.selected)
      	scope.selected = 0;
    },
    templateUrl: 'templates/serial-tabs.html'
  };
};