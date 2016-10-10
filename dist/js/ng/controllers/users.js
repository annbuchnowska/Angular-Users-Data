var controllerUsers = angular.module('controllerUsers', ['ui.router']);

controllerUsers.controller('users', ['$scope', '$http', '$filter', function($scope, $http, $filter){
	$http({
		url: 'http://localhost:3000/users',
		method: 'GET',
		dataType: 'json',
		data: ''
	}).success(function(dane){
		$scope.users = dane;
	}).error(function(){
		console.log('Error');
	});
	$scope.hideShow = false;
	$scope.showHideOptions = function(){
		if(!$scope.hideShow) $scope.hideShow = true;
		else  $scope.hideShow = false;
	};
	$scope.sexOptions = [
		{
			value: 'male',
			name: 'male'
		},
		{
			value: 'female',
			name: 'female'
		}
	];
	$scope.nationalityOptions = [
		{
			value: 'belgian',
			name: 'Belgian'
		},
		{
			value: 'danish',
			name: 'Danish'
		},
		{
			value: 'finnish',
			name: 'Finnish'
		},
		{
			value: 'german',
			name: 'German'
		},
		{
			value: 'finnish',
			name: 'Finnish'
		},
		{
			value: 'norwegian',
			name: 'Norwegian'
		},
		{
			value: 'polish',
			name: 'Polish'
		}
	];
}]);
