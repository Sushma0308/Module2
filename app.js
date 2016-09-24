(function()
{
  'use strict';

  angular.module('CustomApp',[])
  .controller('CustomCheckController',CustomCheckController)
  //.filter('custom',CustomFilter);,'customFilter',customFilter

  CustomCheckController.$inject=['$scope']

  function CustomCheckController($scope)
  {
    $scope.sayMessage = function ()
    {
      var msg="This is my First Filter Creation";
      return msg;
    };
    /*$scope.customFilterMessage = function ()
    {
      var input="This is my First Filter Creation";
      input = customFilter(input);
      return input;
    };
    $scope.dispalyMessage = function()
    {
    return "Hello";
  };*/

  }
/*  function CustomFilter(){
    return function(msg){
      msg= msg || "";
      msg=msg.replace("First","Last");
      return msg;
    };
  }*/
})();
