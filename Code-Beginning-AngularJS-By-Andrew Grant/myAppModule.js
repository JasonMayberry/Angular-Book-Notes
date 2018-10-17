var myAppModule = angular.module('myAppModule', []);
// use the myAppModule variable to
// configure the module with a controller 
	myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
	// controller code would go here 
	}
);
// use the myAppModule variable to
// configure the module with a filter 
	myAppModule.filter('stripDashes', function() {
		return function(txt) {
			return textToFilter.split('-').join(' ');
	};
});

