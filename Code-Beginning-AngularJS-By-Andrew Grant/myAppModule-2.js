// So far, we have used ngApp in its simplest form, as an attribute without any value. However, 
// you can specify an AngularJS default module, by providing a value. The following code snippet 
// shows ngApp with a value of 'myAppModule', which is the name of the module we have just created.

// <html ng-app="myAppModule">

// With the ngApp directive in place, we can save our module, myAppModule.js, into the js directory. 
// Then we can create a new page, index.html, which will make use of this module. 
// The next two code listings (Listings 4-8 and Listing 4-9) will pull all of this together.


// Listing 4-8. myAppModule.js

// create a new module called 'myAppModule' and save
// a reference to it in a variable called myAppModule
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
	// filter code would go here 
	};
});
