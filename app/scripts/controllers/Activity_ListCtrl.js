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
//                var i;
//                var activities_buffer=Activity.get_activities();
//                for(i in activities_buffer){
//                    if(activities_buffer[i].name == activity.name){
                        localStorage.setItem('activity_name',activity.name);
//                    }
//                localStorage.setItem('activities',JSON.stringify(activities_buffer));
//                }
                Activity.save_choosen_activity_state(activity.state);
                $location.path('/sign_up');
                return activity;
            };
        }
        else{
            $location.path('/CreateActivity');
        }
    });

