/**
 * Created by yoyo on 14-8-25.
 */
angular.module('partyBidApp')
    .controller('sign_upCtrl',function($scope,$location){
    $scope.start='开始';

    $scope.StartSignUp=function(){
       $location.path('/sign_up');
       $scope.start="结束";

    };

    $scope.go_Activity_List=function(){
       $location.path('/Activity_List');
    }

});
