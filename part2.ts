let tasks: string[] = []; //QU2 pt A

function addTask(task:string):number // pt B
{
    tasks.push(task);
    console.log("_______________ New Task Added ____________");
    console.log("Task" +task+ " inserted in list");
    return tasks.length;
}

function listAlltasks():void //pt C
{
    console.log("START: All items in Array")

    tasks.forEach(function(task)
    {
        console.log(task);
    })
    
    console.log("START: All items in Array")
}

function deleteTask(task:string):number //pt D
{
    let index:number = tasks.indexOf(task);
    if (index > -1)
    {
        tasks.splice(index,1);
        console.log("_____________ Task Removed___________")
        console.log("Task " +task+ " removed from list")
    }
    return tasks.length
}

let x:number = addTask('Wake up');
console.log("Number of items in the list: " +x)
addTask('Sleep');

listAlltasks();

deleteTask('Sleep')