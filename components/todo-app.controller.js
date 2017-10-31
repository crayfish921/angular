export class TodoAppController {
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
        this.tasks.push({text: this.input, status: 'active', editable: false});
        this.input = '';
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };

    editTask(task, property, value) {
        task[property] = value;
        console.log(task);
        this.storageService.set('tasks', JSON.stringify(this.tasks));
    };
}
