'use strict';

angular.module('trainingAppApp')
  .directive('collapsible', function () {
    return {
    	restrict:'E',
    	template:'<div><h4 ng-click="toggle()">{{comment.name}}</h4><div ng-show="visible" ng-transclude></div></div>',
    	transclude:true,
    	controller:function($scope){
    		$scope.visible = true;
    		$scope.toggle = function(){
    			$scope.visible = !$scope.visible;
    		};
    	}
    };
});
