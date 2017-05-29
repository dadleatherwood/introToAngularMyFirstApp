angular.module('todoApp').controller('todoCtrl', function($scope){
  $scope.todos = ["add todos", "make them display", "complete todo", "delete"];

  $scope.addTodo = function(todo){
    $scope.todos.push(todo)
    $scope.newTodo = "";
  };

});
