(function()
{
  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController',MsgController)
.filter('loves',LovesFilter)
.filter('truth',TruthFilter);
  MsgController.$inject=['$scope','lovesFilter']

  function MsgController($scope,lovesFilter)
  {
    $scope.stateOfBeing = "hungry";
    $scope.sayMessage = function ()
    {
      var msg="This is my First Filter Creation";
      return msg;
    };
    $scope.sayLovesMessage = function ()
    {
      var msg="This is my First Filter Creation";
      msg = lovesFilter(msg);
      return msg;
    };
    $scope.displayMessage = function()
    {
    $scope.stateOfBeing="fed";
  };

}
  function LovesFilter(){
    return function(input){
      input= input || "";
      input=input.replace("First","Last");
      return input;
    };
  }

  function TruthFilter(){

    return function(input,target,replace){
      input= input || "";
      input=input.replace(target,replace);
      return input;
    }
};
})();
