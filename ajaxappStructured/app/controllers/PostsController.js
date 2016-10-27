angular.module('tApp').controller('PostsController', function($scope, DataServiceFactory, $log){
	$scope.srList = [{val:"id",text:"Id"},
	{val:"title",text:"Title"},
	{val:"body",text:"Body"}];

	$scope.sortby = "id";

	var dPromise = DataServiceFactory.getAllPosts();

	dPromise.then(function(d){
		$scope.posts = d;
	},function(m){
		$log.error(m);
	});
});