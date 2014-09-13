angular.module('partyBidApp')
    .controller('InformationCtrl', function ($scope, $location) {

        var name=localStorage.getItem('activity_name');
        console.log(name)
        $scope.information=name;
        $scope.go_Activity_List=function(){

            $location.path('/Activity_List');
        }


    })