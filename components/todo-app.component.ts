import {TodoAppController} from './todo-app.controller';
const todoAppTemplate = require('./todo-app.template.html');
import './todo-app-style.less';

export class TodoAppComponent {
    public controller: TodoAppController;
    public template: todoAppTemplate;
    constructor() {
        this.controller = TodoAppController;
        this.template = todoAppTemplate;
    }
}
