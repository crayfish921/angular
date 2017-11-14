"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoAppService = (function () {
    function TodoAppService() {
    }
    TodoAppService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    ;
    TodoAppService.prototype.set = function (key, data) {
        return localStorage.setItem(key, data);
    };
    ;
    return TodoAppService;
}());
exports.default = TodoAppService;
