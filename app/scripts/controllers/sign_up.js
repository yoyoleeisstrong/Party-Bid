/**
 * Created by yoyo on 14-8-25.
 */
angular.module('partyBidApp')
    .controller('sign_upCtrl',function($scope,$location){
        if(localStorage.getItem("button_state") == 'AreadyStart'){
            $scope.activity_state='结束';
            var state = 'AreadyStart';
            localStorage.setItem('button_state',state);
        }
        else{
            $scope.activity_state="开始";
            var state = 'UnStart';
            localStorage.setItem('button_state',state);
        }
        $scope.StartSignUp = function() {
        $location.path('/sign_up');
        if (localStorage.getItem("button_state") == 'UnStart') {
            localStorage.setItem('button_state','AreadyStart');
            var i;
            var activities_buffer = Activity.get_activities();
            console.log(activities_buffer)
            var activity = localStorage.getItem('activity_name');
            $scope.activity_state='结束';
            for (i in activities_buffer) {
                if (activities_buffer[i].name == activity)
                    activities_buffer[i].state = 'start';
                    console.log(activities_buffer)
            }
            localStorage.setItem('activities', JSON.stringify(activities_buffer));
        }else{
            localStorage.setItem('button_state','UnStart');
            $scope.activity_state='开始';
            var j;
            var activities_buffer1 = Activity.get_activities();
            var activity = localStorage.getItem('activity_name');
            for (j in activities_buffer1) {
                if (activities_buffer1[j].name == activity)
                    activities_buffer1[j].state = 'unstart';
            }
            localStorage.setItem('activities', JSON.stringify(activities_buffer1));
        }
    };

        $scope.go_Activity_List = function () {
            $location.path('/Activity_List');
        }
});
