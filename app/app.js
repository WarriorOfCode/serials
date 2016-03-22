angular
	.module('serials', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', configuration]);
    
function configuration($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/templates/serials-list.html',
            controller: 'SerialsListCtrl',
        })
        .when('/serial/:id', {
            templateUrl: 'serial/templates/serial.html',
            controller: 'SerialCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
}