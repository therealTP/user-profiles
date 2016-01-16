angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: user
      });
    },

    getFriends: function() {
    	return $http({
        method: 'GET',
        url: '/api/friends'
      })
      .then(
        function(response) {
          return response.data;
        }
      );
    }
  };
});
