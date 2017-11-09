import TodoAppService from "../services/todo-app.service";
import {taskInterface} from "./todo-app.model";

export class TodoAppController {

    private storageService: TodoAppService;
    public tasks: Object[];
    public state: string;
    public input: string;

    /*@ngInject*/
    constructor(storageService){
        this.storageService = storageService;
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
        let task: taskInterface = {text: this.input, status: 'active', editable: false};
        this.tasks.push(task);
        this.input = '';
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };

    editTask(task: Object, property: string, values: any) {
        task[property] = value;
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };

    cancelEditing(task: Object, value: any) {
        task['text'] = value;
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    }

}
