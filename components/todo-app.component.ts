import {TodoAppController} from './todo-app.controller';
const todoAppTemplate = require('./todo-app.template.html');
import './todo-app-style.less';

export class TodoAppComponent {
    controller: any;
    template: any;
    constructor() {
        this.controller = TodoAppController;
        this.template = todoAppTemplate;
    }
}
