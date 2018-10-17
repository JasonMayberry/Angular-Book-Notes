
link: function ($scope, $element) { 
	// set default state of hide/show
	$scope.isHidden = true;
	// add function to manage hide/show state 
	$scope.showHideColors = function () {
		$scope.isHidden = !$scope.isHidden; 
	}
	// DOM manipulation
	var colorContainer = $element.find('div'); 
	angular.forEach($scope.$parent.colorsArray, function (color) {
		var appendString = "<div style='background-color:" + color + "'>" + color + "</div>";
		colorContainer.append(appendString); 
	});
}

