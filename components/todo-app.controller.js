angular.module('todoApp')
    .controller('todoCtrl',['storageService', function(storageService) {

        if (storageService.get('tasks')) {
            tasks = JSON.parse(storageService.get('tasks'));
        }
        else {
            var tasks = {
                active: [],
                done: [],
                archived: []
            }
        }

        this.todos = tasks.active;
        this.donetasks = tasks.done;
        this.archive = tasks.archived;

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
            tasks.active = this.todos;
            this.input = '';
            storageService.set('tasks', JSON.stringify(tasks));
        };

        this.removeTask = function(index){
            this.archive.push(this.todos[index]);
            tasks.archived = this.archive;
            this.todos.splice(index, 1);
            tasks.active = this.todos;
            storageService.set('tasks', JSON.stringify(tasks));
        };

        this.markAsDone = function(index){
            this.todos[index].done = true;
            tasks.active = this.todos;
            this.donetasks.push(this.todos[index]);
            tasks.done = this.donetasks;
            storageService.set('tasks', JSON.stringify(tasks));
        };
    }]);
