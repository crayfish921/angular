import {TodoTaskController} from 'todo-task.controller'
import todoTaskTemplate from 'components/todo-task.template.html'
import appModule from 'app';

class TodoTaskComponent {
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

appModule.component('todoTask', new TodoTaskComponent());
