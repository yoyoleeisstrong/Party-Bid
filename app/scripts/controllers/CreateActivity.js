/**
 * Created by yoyo on 14-8-24.
 */
function Item(name) {
    this.name = name;
}

angular.module('partyBidApp')
    .controller('CreateActivityCtrl', function ($scope, $location) {


        $scope.go_to_activity_list = function () {
            $location.path('Activity_List');
        };
        $scope.go_sign_up = function (input_text) {

            console.log(localStorage.getItem('activities'));
//判断activity_name是否为空，如果是就为空数组，否则为原来的数组
            var activity_name = localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')) : [];
//把文本框中的数组放进中转站（是个对象）
            var buffer_name=new Item(input_text);
//把中转站中的对象以先进后出的方式加到数组activity_name里边
            activity_name.unshift(buffer_name.name);
//存到storage里
            localStorage.setItem('activities',JSON.stringify(activity_name));
            $location.path('/sign_up');

        };

    });