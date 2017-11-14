import * as angular from 'angular';
import 'angular-mocks';
import {TodoAppController} from "./todo-app.controller";

describe('TodoAppController', () => {
    beforeEach(angular.mock.module('todoApp'));

    let storageService;

    beforeEach(angular.mock.inject((_storageService_) => {
        storageService = _storageService_;
    }));

    describe('addTask', () => {
        it('Should add task to local storage',  () => {
            let controller = new TodoAppController(storageService);
            controller.input = '213';
            controller.addTask();
            let acquiredTask = JSON.parse(localStorage.getItem('tasks'))[0];
            expect(acquiredTask.text).toEqual('213');
        })
    })
});