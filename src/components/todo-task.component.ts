import {TodoTaskController} from './todo-task.controller';
const todoTaskTemplate = require('./todo-task.template.html');
import './todo-task-style.less';

export class TodoTaskComponent implements ng.IComponentOptions {
    bindings;
    template;
    controller = TodoTaskController;
    constructor() {
        this.template = todoTaskTemplate;
        this.bindings = {
            task: '<',
            containerState: '<',
            onUpdate: '&',
            onCancel: '&'
        }
    }
}
