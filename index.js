import './style.css';

import appModule from './app';

import {TodoAppComponent} from "./components/todo-app.component";
import {TodoTaskComponent} from "./components/todo-task.component";
import TodoAppService from "./services/todo-app.service";
import taskStatusFilter from "./filters/task-status.filter";

appModule.component('todoList', new TodoAppComponent());
appModule.component('todoTask', new TodoTaskComponent());
appModule.service('storageService', TodoAppService);
appModule.filter('taskStatusFilter', taskStatusFilter);