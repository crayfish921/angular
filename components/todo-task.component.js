import {TodoTaskController} from './todo-task.controller';
import todoTaskTemplate from './todo-task.template.html';

export class TodoTaskComponent {
    constructor() {
        this.template = todoTaskTemplate;
        this.controller = TodoTaskController;
        this.bindings = {
            task: '<',
            containerState: '<',
            onUpdate: '&'
        }
    }
}
