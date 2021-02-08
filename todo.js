"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = []; // 1
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("_______________ New Task Added ____________");
        console.log("Task" + task + " inserted in list");
        return this.tasks.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("START: All items in Array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("START: All items in Array");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("_____________ Task Removed___________");
            console.log("Task " + task + " removed from list");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('sleep');
myTodos.listAllItems();
myTodos.deleteTask('sleep');
