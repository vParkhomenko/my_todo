angular.module('todo').
    component('todo', {
    templateUrl: 'todo/todo.html',
    controller: function submitController($scope) {
        $scope.list = [];
        $scope.submit = function() {
            if ($scope.text) {
                $scope.list.push(this.text);
            }

        };
    }
});