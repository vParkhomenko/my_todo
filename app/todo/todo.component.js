angular.module('todo').
    component('todo', {
    templateUrl: 'todo/todo.html',
    controller: function submitController($scope, $filter) {
        $scope.list = [];
        $scope.newTodo = '';

        $scope.submit = function() {

            if ($scope.newTodo) {
                $scope.list.push({
                 title: this.newTodo,
                 completed: false
                });
                $scope.newTodo = '';
            }

        };
        $scope.removeTodo = function ($index) {
            $scope.list.splice($index, 1);
        };
        $scope.toggleCompleted = function ($index, completed) {//debugger;
            if (angular.isDefined(completed)) {
                $index.completed = completed;
            }
        };

    }

});