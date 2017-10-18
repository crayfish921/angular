angular.module('todoApp')
    .factory('storageService', function() {
        return {
            get: function(key) {
                return localStorage.getItem(key);
            },
            set: function(key, data) {
                localStorage.setItem(key, data);
            }
        };
    });