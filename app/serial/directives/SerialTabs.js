angular
	.module('serials')
	.directive('serialTabs', serialTabs);
	
function serialTabs() {
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
		templateUrl: 'serial/templates/serial-tabs.html'
	};
};