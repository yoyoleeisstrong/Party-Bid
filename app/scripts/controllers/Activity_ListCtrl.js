/**
 * Created by yoyo on 14-8-24.
 */

angular.module('partyBidApp')
    .controller('Activity_ListCtrl', function ($scope,$location) {

        $scope. go_create_activity=function(){
            $location.path('/CreateActivity');
        };
        $scope.activities=Activity.get_activities();
    });