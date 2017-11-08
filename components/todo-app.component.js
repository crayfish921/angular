"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_app_controller_1 = require("./todo-app.controller");
var todo_app_template_html_1 = require("./todo-app.template.html;");
require("./todo-app-style.less");
var TodoAppComponent = (function () {
    function TodoAppComponent() {
        this.controller = todo_app_controller_1.TodoAppController;
        this.template = todo_app_template_html_1.default;
    }
    return TodoAppComponent;
}());
exports.TodoAppComponent = TodoAppComponent;
