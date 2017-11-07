"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoAppController = (function () {
    /*@ngInject*/
    function TodoAppController(storageService) {
        this.storageService = storageService;
        var tasksInStorage = this.storageService.get('tasks');
        var tasks = [];
        if (tasksInStorage !== null) {
            tasks = JSON.parse(tasksInStorage);
        }
        this.tasks = tasks;
        this.state = 'all';
    }
    TodoAppController.prototype.revealAll = function () {
        this.state = 'all';
    };
    ;
    TodoAppController.prototype.revealDone = function () {
        this.state = 'done';
    };
    ;
    TodoAppController.prototype.revealArchive = function () {
        this.state = 'archived';
    };
    ;
    TodoAppController.prototype.addTask = function () {
        var task = {};
        this.tasks.push({ text: this.input, status: 'active', editable: false });
        this.input = '';
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };
    ;
    TodoAppController.prototype.editTask = function (task, property, value) {
        task[property] = value;
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };
    ;
    TodoAppController.prototype.cancelEditing = function (task, value) {
        task['text'] = value;
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };
    return TodoAppController;
}());
exports.TodoAppController = TodoAppController;
