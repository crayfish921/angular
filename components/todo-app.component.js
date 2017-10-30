import {TodoAppController} from 'todo-app.controller';
import todoAppTemplate from 'components/todo-app.template.html';
import appModule from 'app';

class TodoAppComponent {
    constructor(){
        this.controller = TodoAppController;
        this.template = todoAppTemplate();
    }
}

appModule.component('todoList', new TodoAppComponent());
