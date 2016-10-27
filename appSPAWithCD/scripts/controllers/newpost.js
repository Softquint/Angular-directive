'use strict';

angular.module('trainingAppApp')
  .controller('NewpostCtrl', function (trainingDataFactory, $log) {
    var self=this;

    self.open=function(){
        self.opened=true;
    };
    
    trainingDataFactory.getUsers().then(function (d) {
        self.users = d;
    }, function (err) {
        $log.info(err);
    });

    self.savePost=function(frm,post){
    	console.log(frm);
        if(frm.$valid)
        {
            trainingDataFactory.save(post).then(function (d) {
                $log.info("Data Saved...");
            }, function () {
                $log.error("Some Error..");
            });
        }
        else
        {
            $log.error("Invalid Form");
        }
        
    }
});
