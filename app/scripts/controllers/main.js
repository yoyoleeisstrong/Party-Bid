'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */




angular.module('partyBidApp')
    .controller('MainCtrl', function ($scope,$location) {
        var  judge=localStorage.getItem('activities')?1:2;
        if(judge==1){
            $location.path('/Activity_ListCtrl');
        }
        else{
            $location.path('/CreateActivity');
        }


    });