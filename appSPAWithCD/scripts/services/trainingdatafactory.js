'use strict';

angular.module('trainingAppApp')
  .factory('trainingDataFactory', function ($http, $q) {
        $http.defaults.transformResponse.push(function(data) {
            //debugger;
            if(data.constructor===Array)
            {
              for (var i = 0; i < data.length; i++) {
                data[i].voteCount=0;
              };
            }
            return data;
        });
        return {
            get: function (id) {
                var deferred = $q.defer();
                var post={};

                $http.get("http://jsonplaceholder.typicode.com/posts/" + id)
                    .success(function (data) {
                        post=data;
                        $http.get("http://jsonplaceholder.typicode.com/posts/" + id + "/comments")
                            .success(function (data) {
                                post.comments=data;
                                deferred.resolve(post);
                            })
                        .error(function () {
                            deferred.reject();
                        });                        
                    })
                .error(function () {
                    deferred.reject();
                });

                return deferred.promise;
            },
            save: function (post) {
                var deferred = $q.defer();

                $http.post("http://jsonplaceholder.typicode.com/posts", post)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                .error(function () {
                    deferred.reject();
                });

                return deferred.promise;
            },
            getAllPosts: function () {
                var deferred = $q.defer();

                $http.get("http://jsonplaceholder.typicode.com/posts/")
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                .error(function (err) {
                    deferred.reject("Some Error");
                });

                return deferred.promise;
            },
            getUsers:function(){
                var deferred = $q.defer();

                $http.get("http://jsonplaceholder.typicode.com/users")
                    .success(function (users) {
                        deferred.resolve(users);
                    })
                .error(function (err) {
                    deferred.reject("Some Error");
                });

                return deferred.promise;
            }
        }
  });
