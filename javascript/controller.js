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
});
