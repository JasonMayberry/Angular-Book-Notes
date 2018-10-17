
myAppModule.filter('stripDashes', function () {
	// the function we are in returns 
	// the function below
	return function(txt) {
		return textToFilter.split('-').join(' ');
	};
});

// Of particular note here is the fact that the filter function does not itself 
// implement our logic; rather, it returns a function that implements it. 
// This is why that second argument supplied to the filter method is called 
// a “factory function”; its main purpose in life is to manufacture functions.

