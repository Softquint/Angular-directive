'use strict';

angular.module('trainingAppApp')
  .controller('DetailsCtrl', function (trainingDataFactory, $log, $location) {
    var self=this;
    
    self.sortby = "name";
    self.post={};

    var id = getParameterByName("id")

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


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}