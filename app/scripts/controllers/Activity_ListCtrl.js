
angular.module('partyBidApp')
    .controller('Activity_ListCtrl', function ($scope,$location) {
         $scope. go_create_activity=function(){
            console.log('b');
         $location.path('/CreateActivity');
    };

        $scope.activities=JSON.parse(localStorage.getItem('activities'));


    });/**
 * Created by yoyo on 14-8-24.
 */
