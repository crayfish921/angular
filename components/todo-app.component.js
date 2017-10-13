angular.
module('todoApp').
component('todoList', {
    templateUrl: 'components/todo-app.template.html',
    controller: function todoCtrl() {
        this.todos = [];
        this.addTask = function () {
            this.todos.push({task: this.input, done: false});
            this.input = '';
        }
        this.removeTask = function (index) {
            this.todos.splice(index, 1);
        }
        this.taskDone = function (index){
            this.todos[index].done = true;
        }
    }
});