angular.module('collegeControllers',[])
    .controller('MyController',function($scope) {
//	controller	logic	here
    $scope.showInfo = function (infoId) {
        $(infoId).show();
        $('html,body').animate({
        	scrollTop: $(infoId).offset().top
        },1000);
    };
    $scope.dismissInfo = function (infoId) {
        $(infoId).hide();
    };
//Trying to make twitter api work in angular this code from ngtweet website
    //var myApp = angular.module("collegeCompare", ['ngtweet']);
    })
angular.module('ui.bootstrap', [])
    .controller('modalCtrl', function($scope, $uibModal) {

    })








      
