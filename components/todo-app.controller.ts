export class TodoAppController {
    /*@ngInject*/
    constructor(storageService){
        this.storageService = storageService;
        interface Task { text: string; status: number; editable: boolean }
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
        let task = {} as Task;
        this.tasks.push({text: this.input, status: 'active', editable: false});
        this.input = '';
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };

    editTask(task, property, value) {
        task[property] = value;
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };

    cancelEditing(task, value) {
        task['text'] = value;
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    }

}
