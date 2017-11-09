import {TodoTaskController} from './todo-task.controller';
const todoTaskTemplate = require('./todo-task.template.html');
import './todo-task-style.less';

export class TodoTaskComponent {
    bindings: any;
    template: any;
    controller: any;
    constructor() {
        this.template = todoTaskTemplate;
        this.controller = TodoTaskController;
        this.bindings = {
            task: '<',
            containerState: '<',
            onUpdate: '&',
            onCancel: '&'
        }
    }
}
