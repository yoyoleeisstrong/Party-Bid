/**
 * Created by yoyo on 14-8-25.
 */
angular.module('partyBidApp')
    .controller('sign_upCtrl',function($scope,$location){
    if(localStorage.getItem("button_state") != '结束'){
        $scope.activity_state='开始';
    }
    else{
        $scope.activity_state="结束";
    }
    $scope.StartSignUp = function(){
        $location.path('/sign_up');
        if(localStorage.getItem("button_state") == '结束'){
            $scope.activity_state='开始';
            var state ='开始';
        }else{
            $scope.activity_state="结束";
            var state ='结束';
        }
        localStorage.setItem('button_state',state);
    };
      $scope.go_Activity_List=function(){
      $location.path('/Activity_List');
    }


});
