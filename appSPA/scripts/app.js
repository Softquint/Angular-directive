'use strict';

angular.module('trainingAppApp', ['ngMessages','ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/check',{
			template:"<h1>This is just for fun.</h1>"
		});

		$routeProvider.when('/posts',{
			templateUrl:"views/posts.html"
		});

		$routeProvider.when('/newpost',{
			templateUrl:"views/newpost.html"
		});

		$routeProvider.when('/details/:postId',{
			templateUrl:"views/details.html"
		});
	})