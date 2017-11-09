import TodoAppService from "../services/todo-app.service";
import {Task} from "./todo-app.model";

export class TodoAppController implements ng.IComponentController {
    tasks: Task[];
    state: string;
    input: string;

    /*@ngInject*/
    constructor(private storageService: TodoAppService){
        let tasksInStorage = this.storageService.get('tasks');
        let tasks = [];

        if (tasksInStorage !== null) {
            tasks = JSON.parse(tasksInStorage);
        }

        this.tasks = tasks;
        this.state = 'all';
    }

    revealAll() {
        this.state = 'all';
    };

    revealDone() {
       this.state = 'done';
    };

    revealArchive() {
        this.state = 'archived';
    };

    addTask() {
        let task: Task = {text: this.input, status: 'active', editable: false};
        this.tasks.push(task);
        this.input = '';
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };

    editTask(task: Task, property: string, value: string) {
        task[property] = value;
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };

    cancelEditing(task: Task, value: string) {
        task['text'] = value;
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    }

}
