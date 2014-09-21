/**
 * Created by yoyo on 14-8-24.
 */
angular.module('partyBidApp')
    .controller('CreateActivityCtrl', function ($scope, $location) {


        $scope.go_to_activity_list = function () {
            $location.path('Activity_List');
        };
        $scope.go_sign_up = function (input_text) {
            if(Activity.duplicated(input_text)){
                $location.path('/CreateActivity');
                $scope.check_repeat = true;
                return;
            }
            var activity = new Activity(input_text);
                Activity.set_activity_list(activity);
                $location.path('/sign_up');
            };

        $scope.WeatherToShow_fanhui=function(){
            var ExistOrNot=Activity.weathertoshow_fanhui();
            return ExistOrNot;
        };

    });