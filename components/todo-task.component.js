angular.module('todoApp')
    .component('todoTask', {
        templateUrl: 'components/todo-task.template.html',
        bindings: {
            task: '<',
            containerState: '<',
            onUpdate: '&'
        },
        controller: 'todoTaskCtrl'
});
