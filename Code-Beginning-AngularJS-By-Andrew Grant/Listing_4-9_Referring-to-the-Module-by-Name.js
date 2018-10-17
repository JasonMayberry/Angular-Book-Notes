
// Listing 4-9. myAppModule.js

// Create a new module
angular.module('myAppModule', []);
// configure the module with a controller 
angular.module('myAppModule').controller('MyFilterDemoCtrl', function ($scope) {
	// controller code would go here 
});
// configure the module with a filter 
angular.module('myAppModule').filter('stripDashes', function() {
	return function(txt) {
	// filter code would go here
	}; 
});

// This file does not use a variable to store a reference to the module. Instead, 
// it uses the single argument version of the angular.module method to retrieve a 
// reference to it. 
// This single argument is the name we gave the module when we 
// created it. It really doesn’t make much difference which approach you use, and 
// both are commonly used. I prefer the approach in Listing 4-8, where we store a 
// reference, as there is less repetition of the module name, so fewer chances of 
// typos creeping in. Sometimes, however, you might find you need to get a reference 
// to a module, and the single argument version of the module method might be the 
// only way to get it.

