var todoApp = angular.module('todoApp', []);

todoApp.controller('todoCtrl', function () {
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
});




