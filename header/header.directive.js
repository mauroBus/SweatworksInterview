
angular.module('test')

.directive('testHeader', function() {
  return {
    restrict: 'E',
    scope: {
      onShowAll: '=',
      onShowEven: '=',
      onShowOdd: '=',
      onNumbersChange: '='
    },
    templateUrl: 'header/header.tpl.html',
    controller: ['$scope', function($scope) {
      $scope.minNumber = 0;
      $scope.maxNumber = 10;

      var setState = function(isShowingEven, isShowingOdd, isShowingAll) {
        $scope.isShowingEven = isShowingEven;
        $scope.isShowingOdd = isShowingOdd;
        $scope.isShowingAll = isShowingAll;
      }

      setState(false, false, true);

      $scope.showAll = function() {
        setState(false, false, true);
        $scope.onShowAll();
      };

      $scope.showEven = function() {
        setState(true, false, false);
        $scope.onShowEven();
      };

      $scope.showOdd = function() {
        setState(false, true, false);
        $scope.onShowOdd();
      };

      $scope.buildNumbers = function() {
        var numbers = [];

        for (var i = $scope.minNumber; i <= $scope.maxNumber; i++) {
          numbers.push(i);
        }
        $scope.onNumbersChange(numbers);
      };
    }]
  };

});
