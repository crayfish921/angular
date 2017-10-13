angular.
module('todoApp').
component('todoList', {
    templateUrl: 'components/todo-app.template.html',
    controller: function ($scope) {
        $scope.todos = [];
        $scope.addTask = function () {
            $scope.todos.push({task: $scope.input, done: false});
            $scope.input = '';
        }
        $scope.removeTask = function (index) {
            $scope.todos.splice(index, 1);
        }
        $scope.taskDone = function (index){
            $scope.todos[index].done = true;
        }
    }
});