import {TodoAppController} from './todo-app.controller';
const todoAppTemplate = require('./todo-app.template.html');
import './todo-app-style.less';

export class TodoAppComponent implements ng.IComponentOptions {
    controller = TodoAppController;
    template;
    constructor() {
        this.template = todoAppTemplate;
    }
}
