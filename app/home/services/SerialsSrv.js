angular
	.module('serials')
    .factory('SerialsSrv', ['$http', SerialsSrv])
    
function SerialsSrv($http){
    return {
        getSeasonSerias: getSeasonSerias
    };

    function getSeasonSerias(seasonId) {
        return $http.get('/data/'+ seasonId +'season.json');
    }
}