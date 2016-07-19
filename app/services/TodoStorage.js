'use strict';

myTodo.factory('todoStorage', function () {
    var STORAGE_ID = 'todos-angularjs';

    return {
        get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        put: function (list) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(list));
        }
    };
});