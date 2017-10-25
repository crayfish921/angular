angular.module('todoApp')
    .controller('todoTaskCtrl', function () {

        this.$onInit = function (){
            this.internalTask = angular.copy(this.task);
        };
        
        this.editText = function () {
            this.onUpdate({task: this.task, property: 'text', value: this.internalTask.text});
        };
        
        this.remove = function () {
            this.onUpdate({task: this.internalTask, property: 'status', value: 'archived'});
        };

        this.markAsDone = function () {
            this.onUpdate({task: this.internalTask, property: 'status', value: 'done'});
        };

        this.startEdit = function () {
            this.editMode = true;
        };

        this.shutDownEdit = function () {
            this.editMode = false;
        };
    });