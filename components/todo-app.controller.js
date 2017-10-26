angular.module('todoApp')
    .controller('todoCtrl', ['storageService', function (storageService) {
        var tasksInStorage = storageService.get('tasks');
        var tasks = [];

        if (tasksInStorage !== null) {
            tasks = JSON.parse(tasksInStorage);
        }

        this.tasks = tasks;
        this.state = 'all';

        this.revealAll = function () {
            this.state = 'all';
        };

        this.revealDone = function () {
            this.state = 'done';
        };

        this.revealArchive = function () {
            this.state = 'archived';
        };

        this.addTask = function () {
            this.tasks.push({text: this.input, status: 'active', editable: false});
            this.input = '';
            storageService.set('tasks', JSON.stringify(this.tasks));
        };

        this.editTask = function (task, property, value) {
            task[property] = value;
            storageService.set('tasks',JSON.stringify(this.tasks));
        };
    }]);
