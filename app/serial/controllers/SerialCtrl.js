angular
	.module('serials')
    .controller('SerialCtrl', ['$scope', '$routeParams', 'SerialSrv', 'SerialsSrv', SerialCtrl])
    
function SerialCtrl($scope, $routeParams, SerialSrv, SerialsSrv) {
    $scope.serial = SerialSrv.get({id: $routeParams.id});
    $scope.getSerias = function (season) {
        SerialsSrv.getSeasonSerias(season)
        .success(function(data){
            $scope.serias = data;
        });
    }
}