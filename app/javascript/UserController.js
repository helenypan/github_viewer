/**
 * Created by yuepan on 18/06/2017.
 */

(function(){
    var app = angular.module("githubViewer");

    var UserController = function($scope, github, $routeParams, $log){

        var onUserComplete = function(data){
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data){
            $scope.repos = data

        };

        var onError = function(reason){
            $scope.error = "Could not fetch the data.";
            $log.info(reason)
        };

        $scope.username = $routeParams.username;
        github.getUser($scope.username).then(onUserComplete, onError);
        $scope.repoSortOrder = "language"
    };

    app.controller("UserController", UserController)

}());
