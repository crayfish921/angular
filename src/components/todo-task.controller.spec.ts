import {TodoTaskController} from "./todo-task.controller";
import {Task} from "./todo-app.model";

describe('TodoTaskController', () => {

    describe('remove', () => {
        it('Should call onUpdate,', () => {
            let controller = new TodoTaskController();
            controller.onUpdate = () => {};
            controller.internalTask  = <Task>{};
            spyOn(controller, 'onUpdate');
            controller.remove();
            expect(controller.onUpdate).toHaveBeenCalled();
        })
    })
});