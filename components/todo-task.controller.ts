import {Task} from "./todo-app.model";

declare var angular: any;
export class TodoTaskController {

    editMode: boolean;
    internalTask: Task;
    private onCancel: Function;
    private onUpdate: Function;
    private initialText: string;
    private task: Task;
    private code: number;

    constructor(){
        this.code = 13;
    }

    $onInit() {
        this.internalTask = angular.copy(this.task);
    }

    $doCheck() {
        if (!angular.equals(this.internalTask, this.task)) {
            this.internalTask = angular.copy(this.task);
        }
    }

    editText() {
        this.onUpdate({task: this.task, property: 'text', value: this.internalTask.text});
    }

    cancelEdit() {
        this.onCancel({task: this.task, value: this.initialText});
        this.editMode = false;
    }

    remove() {
        this.internalTask.status = 'archived';
        this.onUpdate({task: this.task, property: 'status', value: 'archived'});
    }

    markAsDone() {
        this.internalTask.status = 'done';
        this.onUpdate({task: this.task, property: 'status', value: 'done'});
    }

    startEdit() {
        this.initialText = angular.copy(this.internalTask.text);
        this.editMode = true;
    }

    shutDownEdit() {
        this.editMode = false;
    }

    submit(keyEvent) {
        if (keyEvent.which === this.code)
            this.editMode = false;
    }
}
