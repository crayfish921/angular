import {TodoTaskController} from 'todo-task.controller';
import todoTaskTemplate from 'components/todo-task.template.html';

export class TodoTaskComponent {
    constructor() {
        this.template = todoTaskTemplate();
        this.controller = TodoTaskController;
        this.bindings = {
            task: '<',
            containerState: '<',
            onUpdate: '&'
        }
    }
}
