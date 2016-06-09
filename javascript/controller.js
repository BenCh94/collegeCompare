angular.module('collegeControllers',[]).controller('MyController',function($scope) {
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
});
/*angular.module('ui.bootstrap', []).controller('ModalCtrl',function($scope, $uibmodal){
    $scope.open = function (size) {
        $uibModal.open();
    };
});*/

angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});




      
