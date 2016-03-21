angular
	.module('serials', ['ngRoute', 'ngResource'])
	.factory('Serial', ['$resource', Serial])
	.factory('Serias', ['$http', Serias])
	.controller('SerialsListCtrl', ['$scope', '$http', 'Serial', SerialsListCtrl])
	.controller('SerialCtrl', ['$scope', '$routeParams', 'Serial', 'Serias', SerialCtrl])
	.directive('serialTabs', ['Serias', serialTabs])
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

	function Serias($http){
		return {
			getSeasonSerias: getSeasonSerias
		};

		function getSeasonSerias(seasonId) {
			return $http.get('serials/'+seasonId+'season.json');
		}
	}

function SerialCtrl($scope, $routeParams, Serial, Serias) {
		$scope.serial = Serial.get({id: $routeParams.id});
		$scope.getSerias = function (season) {
			Serias.getSeasonSerias(season)
			.success(function(data){
				$scope.serias = data;
			})
		}

	};

function SerialsListCtrl($scope, $http, Serial) {
	$scope.serials = Serial.query();
}

function serialTabs(Serias) {
  return {
	restrict: 'E',
	transclude: true,
	scope: {
	  title: '@',
	  seasons: '=',
	  selected: '@',
	  getSerias: '&getSerias'
	},
	link: function(scope, element, attrs, tabsCtrl) {
	  scope.select = function(active){
		scope.selected = active;
		scope.getSerias({season: active});
	  }
	  if (!scope.selected)
		scope.select(0)
	  else
		scope.select(scope.selected)
	},
	templateUrl: 'templates/serial-tabs.html'
  };
};