'use strict';

angular.module('partyBidApp')
    .controller('StartCtrl',function($scope,$location){

       var judge = localStorage.getItem('activities')?[2]:[1];
       if(judge[0]==2){
           $location.path('/Activity_List');
       }
       else {
           $location.path('/CreateActivity');
       }
       });
