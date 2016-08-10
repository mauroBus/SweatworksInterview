angular.module('test', []);


angular.module('test')
.controller('testController', ['$scope', function($scope) {

  $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  $scope.showEven = true;
  $scope.showOdd = true;
  $scope.displayLeft = true;

  var setState = function(showEven, showOdd) {
    $scope.showEven = showEven;
    $scope.showOdd = showOdd;
  }

  $scope.onShowAll = function() {
    setState(true, true);
  };

  $scope.onShowEven = function() {
    setState(true, false);
  };

  $scope.onShowOdd = function() {
    setState(false, true);
  };

  $scope.onNumbersChange = function(numbers) {
    $scope.numbers = numbers;
  };

  $scope.turnNumbers = function(toLeft) {
    $scope.displayLeft = toLeft;
  };

}]);
