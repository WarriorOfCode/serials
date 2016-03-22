angular
	.module('serials')
    .controller('SerialsListCtrl', ['$scope', '$http', 'SerialSrv', SerialsListCtrl])

function SerialsListCtrl($scope, $http, SerialSrv) {
	$scope.serials = SerialSrv.query();
}