
// Listing 3-2. MVC in Action
function MyFirstCtrl($scope) {
	// populate the employees variable with some model data
	var employees = ['Christopher Grant', 'Monica Grant', 'Christopher Grant', 'Jennifer Grant'];
	// Now put this model data into the scope so it can be used in the view
	$scope.ourEmployees = employees; 
}

