// Create the module
angular.module('myAppModule', []);

myAppModule.directive('colorList', function () {
	return {
		restrict: 'AE',
		template:
		"<button ng-click='showHideColors()' type='button'>"
		+ "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}" 
		+ "</button><div ng-hide='isHidden' id='colorContainer'>"
		+ "</div>"
	}
});


// // configure the module with a controller 
// angular.module('myAppModule').controller('myProductDetailCtrl', function ($scope) {
// 	// Hide colors by default 
// 	$scope.isHidden = true;
// 	// a function, placed into the scope, which
// 	// can toggle the value of the isHidden variable 
// 	$scope.showHideColors = function () {
// 		$scope.isHidden = !$scope.isHidden;
// 	}
// });

