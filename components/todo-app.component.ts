import {TodoAppController} from './todo-app.controller.ts';
import todoAppTemplate from './todo-app.template.html';
import './todo-app-style.less';

export class TodoAppComponent {
    constructor() {
        this.controller = TodoAppController;
        this.template = todoAppTemplate;
    }
}
