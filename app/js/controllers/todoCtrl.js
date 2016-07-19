'use strict';

angular.module('myTodo').controller('TodoCtrl', function TodoCtrl($scope, $location, todoStorage) {
    var todos = $scope.todos = todoStorage.get();
    $scope.$watch('todos', function() {
        todoStorage.put(todos);
    }, true);

    $scope.addTodo = function() {
        if(!$scope.newTodo.length) {
            return;
        }

        todos.push({
            title: $scope.newTodo,
            completed: false
        });

        $scope.newTodo = '';
    };

    $scope.editTodo = function(todo) {
        $scope.editedTodo = todo;
    }

    $scope.doneEditing = function(todo) {
        $scope.editedTodo = null;
        if (!todo.title) {
            $scope.removeTodo(todo);
        }
    };

    $scope.removeTodo = function (todo) {
        todos.splice(todos.indexOf(todo), 1);
    };

    $scope.clearCompletedTodos = function() {
      $scope.todos = todos = todos.filter(function(value) {
        return !value.completed;
      });
    };
    
    $scope.markAll = function(completed) {
        todos.forEach(function(todo) {
            todo.completed = completed;
        });
    };

/*    $scope.toggleCompleted = function ($index, completed) {//debugger;
        if (angular.isDefined(completed)) {
            $index.completed = completed;
        }
    };*/
});