/**
 * Created by yoyo on 14-8-24.
 */

angular.module('partyBidApp')
    .controller('Activity_ListCtrl', function ($scope,$location) {
        if(Activity.get_activities()){
            $scope. go_create_activity=function(){
                $location.path('/CreateActivity');
            };
            $scope.activities=Activity.get_activities();
            $scope.activity_information=function(activity){
                var i;
                var activities_buffer=Activity.get_activities();
                console.log(activities_buffer[0].name)
                for(i in activities_buffer){
                    if(activities_buffer[i].name == activity.name){
                        console.log(activities_buffer[i])
                        activities_buffer[i].state = 'start';
                    }
                localStorage.setItem('activities',JSON.stringify(activities_buffer));
                }
                Activity.save_choosen_activity_state(activity.state);
                $location.path('/sign_up');
                return activity;
            };
        }
        else{
            $location.path('/CreateActivity');
        }
    });

