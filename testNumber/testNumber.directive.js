
angular.module('test')

.directive('testNumber', function() {
  return {
    restrict: 'E',
    scope: {
      number: '='
    },
    templateUrl: 'testNumber/testNumber.tpl.html',
    controller: ['$scope', function($scope) {
      
    }]
  };

});
