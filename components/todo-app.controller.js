angular.module('todoApp')
    .controller('todoCtrl',['storageService', function(storageService) {
        var tasksInStorage = storageService.get('tasks');
        var tasks = [];

        if (tasksInStorage !== null) {
            tasks = JSON.parse(tasksInStorage);
        }

        this.tasks = tasks;

        this.state = 'all';

        this.revealAll = function(){
            this.state = 'all';
        };

        this.revealDone = function(){
            this.state = 'done';
        };

        this.revealArchive = function() {
            this.state = 'archive';
        };

        this.addTask = function(){
            this.tasks.push({text: this.input, status: 'active'});
            this.input = '';
            storageService.set('tasks', JSON.stringify(tasks));
        };

        this.removeTask = function(index){
            this.tasks[index].status = 'archived';
            storageService.set('tasks', JSON.stringify(tasks));
        };

        this.markAsDone = function(index){
            this.tasks[index].status = 'done';
            storageService.set('tasks', JSON.stringify(tasks));
        };
    }]);
