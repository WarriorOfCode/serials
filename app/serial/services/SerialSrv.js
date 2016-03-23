angular
	.module('serials')
    .factory('SerialSrv', ['$resource', SerialSrv]);
    
function SerialSrv($resource){
    return $resource('/data/:id.json', {}, {
        query: {method:'GET', params:{id:'serials'}, isArray:true}
    });
}