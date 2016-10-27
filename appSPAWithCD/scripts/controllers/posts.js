'use strict';

angular.module('trainingAppApp')
  .controller('PostsCtrl', function (trainingDataFactory, $log) {
    var self=this;
    
    trainingDataFactory.getAllPosts().then(function (d) {
        self.posts = d;
    }, function (err) {
        $log.info(err);
    });
});
