angular.module('todoApp')
    .controller('todoCtrl', function () {

        this.todos = [];
        this.archive = [];
        this.donetasks = [];
        this.states = [{default: true, all: false, done: false, archive: false}];

        this.revealAll = function(){
            if (this.states.length > 0){
                this.states.pop();
            }
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
        };

        this.removeTask = function(index){
            this.archive.push(this.todos[index]);
            this.todos.splice(index, 1);
        };

        this.taskDone = function(index){
            this.todos[index].done = true;
            this.donetasks.push(this.todos[index]);
        };
    });