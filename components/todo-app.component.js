angular.
module('todoApp').
component('todoList', {
    template:
    '<form>' +
    'Task : <input type="text" ng-model="input">' +
    '<button ng-click="addTask()">Add</button>' +
    '</form>' +
    '<ul>' +
    '<li ng-repeat="todo in todos">' +
    '<div>{{todo.task}}</div>' +
    '<div>{{todo.notdone}}</div>' +
    '<div class="remove" ng-click="removeTask($index)"></div>' +
    '<div class="done" ng-show="todo.notdone" ng-click="taskDone($index)"></div>' +
    '</li>'+
    '</ul>',
    controller: function ($scope) {
        $scope.todos = [];
        $scope.addTask = function () {
            $scope.todos.push({task: $scope.input, notdone: true});
            $scope.input = '';
        }
        $scope.removeTask = function (index) {
            console.log(index);
            $scope.todos.splice(index, 1);
        }
        $scope.taskDone = function (index){
            $scope.todos[index].notdone = false;
        }
    }
});