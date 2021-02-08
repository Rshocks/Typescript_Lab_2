import { todoInterface } from './todointerface';

class Todo implements todoInterface
{
    constructor(){}
    

    tasks: Array<string>=[]; // 1

    addTask(task:string):number // 2
    {
        this.tasks.push(task);
        console.log("_______________ New Task Added ____________");
        console.log("Task" +task+ " inserted in list");
        return this.tasks.length;
    }

     listAllItems():void // 3
    {
        console.log("START: All items in Array")

        this.tasks.forEach(function(task)
        {
            console.log(task);
        })  
        
        console.log("START: All items in Array")
    }

     deleteTask(task:string):number // 4
    {
        let index:number = this.tasks.indexOf(task);
        if (index > -1)
        {
            this.tasks.splice(index,1);
            console.log("_____________ Task Removed___________")
            console.log("Task " +task+ " removed from list")
        }
    return this.tasks.length
    }
}

let myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('sleep');

myTodos.listAllItems();

myTodos.deleteTask('sleep');