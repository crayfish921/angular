var todoApp = angular.module('todoApp', []);
todoApp.controller('todoCtrl', function ($scope) {
    $scope.todos = [
    ];
    $scope.addTask = function () {
        $scope.index++;
        $scope.todos.push({task: $scope.input, notdone: true});
        $scope.input = '';

    }
    $scope.removeTask = function (index) {
        console.log(index);
        $scope.todos.splice(index,1);
       /* for(i in $scope.todos) {
            console.log($scope.todos[i].position);
            console.log($scope.removal);
            if ($scope.removal == $scope.todos[i].position ) {
                console.log("iamhere");
                $scope.todos.splice($scope.todos.indexOf($scope.todos[i].position), 1);
                if ($scope.index > -1) {
                    $scope.index--;
                }
            }
        }*/
    }
    $scope.taskDone = function (index){
        $scope.todos[index].notdone = false;
    }
});



