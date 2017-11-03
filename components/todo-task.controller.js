export class TodoTaskController {

    constructor(){
        this.enterCode = 13;
    }

    $onInit() {
        this.internalTask = angular.copy(this.task)
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
        if (keyEvent.which === this.enterCode)
            this.editMode = false;
    }
}
