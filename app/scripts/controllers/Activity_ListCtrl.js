
angular.module('partyBidApp')
    .controller('Activity_ListCtrl', function ($scope,$location) {


         $scope. go_create_activity=function(){
        
         $location.path('/CreateActivity');
         };

         $scope.activities=JSON.parse(localStorage.getItem('activities'));

         $scope.activity_information=function(activity){

             localStorage.setItem('activity_name',activity);
             $location.path('/Activity_Information')
         };


    });
/**
 * Created by yoyo on 14-8-24.
 */