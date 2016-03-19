angular
	.module('serials', ['ngRoute', 'ngResource'])
	.factory('Serial', ['$resource', Serial])
	.controller('SerialsListCtrl', ['$scope', '$http', 'Serial', SerialsListCtrl])
	.controller('SerialCtrl', ['$scope', '$routeParams', '$http', SerialCtrl])
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
    });
  };

function SerialsListCtrl($scope, $http, Serial) {
	$scope.serials = Serial.query();
}