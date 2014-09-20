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
            var activities=Activity.get_activities();
            console.log(activities[0])
            $scope.the_activity=activities[0];

            $scope.activity_information=function(){
                //给一个记号
                $location.path('/sign_up');
            }
        }
        else{
            $location.path('/CreateActivity');
        }

    }); 