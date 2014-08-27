/**
 * Created by yoyo on 14-8-25.
 */
angular.module('partyBidApp')
    .controller('sign_upCtrl',function($scope,$location){
    $scope.go_Activity_List=function(){
       $location.path('/Activity_List');
    }

});
