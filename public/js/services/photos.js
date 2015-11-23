app.factory('photos', ['$http', function($http){
	return $http.get('http://ec2-54-218-46-201.us-west-2.compute.amazonaws.com/all-profiles')
		.success(function(data){
			return data;
		})
		.error(function(err){
			return err;
		});	
	}]);