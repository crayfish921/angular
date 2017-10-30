import {TodoAppController} from 'todo-app.controller';
import todoAppTemplate from 'components/todo-app.template.html';
import appModule from 'app';

export class TodoAppComponent {
    constructor(){
        this.controller = TodoAppController;
        this.template = todoAppTemplate();
    }
}
