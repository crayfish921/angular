"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoTaskController = (function () {
    function TodoTaskController() {
        this.code = 13;
    }
    TodoTaskController.prototype.$onInit = function () {
        this.internalTask = angular.copy(this.task);
    };
    TodoTaskController.prototype.$doCheck = function () {
        if (!angular.equals(this.internalTask, this.task)) {
            this.internalTask = angular.copy(this.task);
        }
    };
    TodoTaskController.prototype.editText = function () {
        this.onUpdate({ task: this.task, property: 'text', value: this.internalTask.text });
    };
    TodoTaskController.prototype.cancelEdit = function () {
        this.onCancel({ task: this.task, value: this.initialText });
        this.editMode = false;
    };
    TodoTaskController.prototype.remove = function () {
        this.internalTask.status = 'archived';
        this.onUpdate({ task: this.task, property: 'status', value: 'archived' });
    };
    TodoTaskController.prototype.markAsDone = function () {
        this.internalTask.status = 'done';
        this.onUpdate({ task: this.task, property: 'status', value: 'done' });
    };
    TodoTaskController.prototype.startEdit = function () {
        this.initialText = angular.copy(this.internalTask.text);
        this.editMode = true;
    };
    TodoTaskController.prototype.shutDownEdit = function () {
        this.editMode = false;
    };
    TodoTaskController.prototype.submit = function (keyEvent) {
        if (keyEvent.which === this.code)
            this.editMode = false;
    };
    return TodoTaskController;
}());
exports.TodoTaskController = TodoTaskController;
