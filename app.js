(function()
{
  'use strict';

  angular.module('CustomApp',[])
  .controller('CustomCheckController',CustomCheckController)
  .filter('custom',CustomFilterFactory);

  CustomCheckController.$inject=['$scope','customFilter']

  function CustomCheckController($scope,customFilter)
  {
    $scope.sayMessage = function ()
    {
      var input="This is my First Filter Creation";
      return input;
    }
    $scope.customFilterMessage = function ()
    {
      var input="This is my First Filter Creation";
      input = customFilter(input);
      return input;
    }
    $scope.dispalyMessage = function()
    {
    return "Hello";
    }

  };
})();
