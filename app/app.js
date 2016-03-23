angular
	.module('serials', ['ui.router', 'ngResource'])
    .config(['$stateProvider', '$urlRouterProvider', configuration]);
    
function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('homepage', {
        	url: '/',
            templateUrl: 'home/templates/serials-list.html',
            controller: 'SerialsListCtrl',
        })
        .state( 'serial', {
        	url: '/serial/:id',
            templateUrl: 'serial/templates/serial.html',
            controller: 'SerialCtrl',
        })
        $urlRouterProvider.otherwise('/');
}