angular.module('collegeControllers',[]).controller('MyController',function($scope
)	{
//	controller	logic	here
    $scope.showInfo = function (infoId) {
        $(infoId).toggle();
        $('html,body').animate({
        	scrollTop: $(infoId).offset().top
        },1000);
    };
    $scope.dismissInfo = function (infoId) {
        $(infoId).hide();
    };
//Trying to make twitter api work in angular this code from ngtweet website
    //var myApp = angular.module("collegeCompare", ['ngtweet']);
});

