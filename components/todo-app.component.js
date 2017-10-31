import {TodoAppController} from './todo-app.controller.js';
import todoAppTemplate from './todo-app.template.html';

export class TodoAppComponent {
    constructor() {
        this.controller = TodoAppController;
        this.template = todoAppTemplate;
    }
}
