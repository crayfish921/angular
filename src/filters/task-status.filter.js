"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function taskStatusFilter() {
    return function (tasks, state) {
        if (state === 'all') {
            return tasks.filter(function (task) {
                return task.status === 'active' || task.status === 'done';
            });
        }
        else {
            return tasks.filter(function (task) {
                return task.status === state;
            });
        }
    };
}
exports.default = taskStatusFilter;
