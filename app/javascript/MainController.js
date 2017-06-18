/**
 * Created by yuepan on 18/06/2017.
 */

(function(){
    var app = angular.module("githubViewer");

    var MainController = function($scope, $log, $location, $interval){

        var decrementCountDown = function(){
            $scope.countdown -= 1;
            if($scope.countdown <1 && $scope.username){
                $scope.searchUser();
            }
        };

        var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCountDown,1000,$scope.countdown);
        };

        $scope.searchUser = function(){
            $log.info("Search for " + $scope.username);
            $location.path("/user/" + $scope.username);
            if(countdownInterval){
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }

        };

        $scope.username = "helenypan";
        $scope.countdown = 5;
        startCountdown();
    };

    app.controller("MainController", MainController);

}());