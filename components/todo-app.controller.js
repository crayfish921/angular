angular.module('todoApp')
    .controller('todoCtrl', function () {

        if (!localStorage.getItem('todos')) {
            this.todos = [];
        }
        else {
            this.todos = JSON.parse(localStorage.getItem('todos'));
        }
        if (!localStorage.getItem('archive')) {
            this.archive = [];
        }
        else {
            this.archive = JSON.parse(localStorage.getItem('archive'));
        }
        if (!localStorage.getItem('donetasks')){
            this.donetasks = [];
        }
        else {
            this.donetasks = JSON.parse(localStorage.getItem('donetasks'));
        }
        this.states = [{default: true, all: false, done: false, archive: false}];

        this.revealAll = function(){
            if (this.states.length > 0){
                this.states.pop();
            };
            this.states.push({default: false, all: true, done: false, archive: false});
        };

        this.revealDone = function(){
            if (this.states.length > 0){
                this.states.pop();
            }
            this.states.push({default: false, all: false, done: true, archive: false});
        };

        this.revealArchive = function(){
            if (this.states.length > 0){
                this.states.pop();
            }
            this.states.push({default: false, all: false, done: false, archive: true});
        };

        this.addTask = function(){
            this.todos.push({task: this.input, done: false});
            this.input = '';
            localStorage.setItem('todos', JSON.stringify(this.todos));
        };

        this.removeTask = function(index){
            this.archive.push(this.todos[index]);
            this.todos.splice(index, 1);
            localStorage.setItem('archive', JSON.stringify(this.archive));
            localStorage.setItem('todos', JSON.stringify(this.todos));
        };

        this.markAsDone = function(index){
            this.todos[index].done = true;
            this.donetasks.push(this.todos[index]);
            localStorage.setItem('todos', JSON.stringify(this.todos));
            localStorage.setItem('donetasks', JSON.stringify(this.todos));
        };
    });
