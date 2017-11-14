"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_task_controller_1 = require("./todo-task.controller");
var todo_task_template_html_1 = require("./todo-task.template.html");
require("./todo-task-style.less");
var TodoTaskComponent = (function () {
    function TodoTaskComponent() {
        this.template = todo_task_template_html_1.default;
        this.controller = todo_task_controller_1.TodoTaskController;
        this.bindings = {
            task: '<',
            containerState: '<',
            onUpdate: '&',
            onCancel: '&'
        };
    }
    return TodoTaskComponent;
}());
exports.TodoTaskComponent = TodoTaskComponent;
