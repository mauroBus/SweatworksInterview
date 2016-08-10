
angular.module('test')

.directive('numberList', function() {
  return {
    restrict: 'E',
    scope: {
      numbers: '=',
      showEven: '=',
      showOdd: '=',
      displayLeft: '='
    },
    templateUrl: 'numberList/numberList.tpl.html'
  };

});
