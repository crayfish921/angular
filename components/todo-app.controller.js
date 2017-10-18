angular.module('todoApp')
    .controller('todoCtrl',['storageService', function(storageService) {

        if (!storageService.get('todos')) {
            this.todos = [];
        }
        else {
            this.todos = JSON.parse(storageService.get('todos'));
        }
        if (!storageService.get('archive')) {
            this.archive = [];
        }
        else {
            this.archive = JSON.parse(storageService.get('archive'));
        }
        if (!storageService.get('donetasks')){
            this.donetasks = [];
        }
        else {
            this.donetasks = JSON.parse(storageService.get('donetasks'));
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
            storageService.set('todos', JSON.stringify(this.todos));
        };

        this.removeTask = function(index){
            this.archive.push(this.todos[index]);
            this.todos.splice(index, 1);
            storageService.set('archive', JSON.stringify(this.archive));
            storageService.set('todos', JSON.stringify(this.todos));
        };

        this.markAsDone = function(index){
            this.todos[index].done = true;
            this.donetasks.push(this.todos[index]);
            storageService.set('todos', JSON.stringify(this.todos));
            storageService.set('donetasks', JSON.stringify(this.todos));
        };
    }]);
