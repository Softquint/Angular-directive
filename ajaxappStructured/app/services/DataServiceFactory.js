angular.module('tApp').factory('DataServiceFactory', function($http, $q){
	return {
		getAllPosts:function(){
			var deferred = $q.defer();

			$http.get("http://jsonplaceholder.typicode.com/posts").success(function(data){
				deferred.resolve(data);
			}).error(function(err){
				deferred.reject("Some Error..");
			});

			return deferred.promise;
		}
	};
});
