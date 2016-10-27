'use strict';

angular.module('trainingAppApp')
  .controller('DetailsCtrl', function (trainingDataFactory, $log, $location, $routeParams) {
    var self=this;
    
    self.sortby = "name";
    self.post={};

    var id = $routeParams.postId;

    trainingDataFactory.get(id).then(function (d) {
        self.post = d;
    }, function (err) {
        $log.info(err);
    });

    self.upVoteComment = function (c) {
        c.voteCount++;
    };

    self.downVoteComment = function (c) {
        c.voteCount--;
    };
  });