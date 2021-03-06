angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		// console.log(user);
		friendService.login(user)
		.then(
			function( response ) {
				if (response.data.userFound) {
					$location.path('/profile');
				} else {
					alert('user not found');
				}
			},
			function(err) {
				console.log(err);
			}
		);
	};

});
