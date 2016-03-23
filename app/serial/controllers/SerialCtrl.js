angular
	.module('serials')
    .controller('SerialCtrl', ['$scope', '$stateParams', 'SerialSrv', 'SerialsSrv', SerialCtrl])
    
function SerialCtrl($scope, $stateParams, SerialSrv, SerialsSrv) {
    $scope.serial = SerialSrv.get({id: $stateParams.id});
    $scope.getSerias = function (season) {
        SerialsSrv.getSeasonSerias(season)
        .success(function(data){
            $scope.serias = data;
        });
    }
}