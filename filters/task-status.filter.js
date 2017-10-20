angular.module('todoApp')
    .filter('taskStatusFilter', function () {
        return function (tasks, state) {
            if (state === 'all') {
               return tasks.filter(function(task) {
                    return task.status === 'active' || task.status === 'done';
               });
            }
            else {
                return tasks.filter(function (task) {
                    return task.status === state;
                });
            }
        };
    });