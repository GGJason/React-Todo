'use client'
import Task from "@/models/Task";
import TaskComponent from "@/components/TaskComponent";
import { useState } from "react";
import CreateTaskComponent from "@/components/CreateTaskComponent";

export default function List(){
    const [tasks, setTasks] = useState<Task[]>([
        {id:1, title:"Allow Finish Job", sort: 3},
        {id:2, title:"Independent Create Task Area", sort: 2},
        {id:3, title:"Tags", sort: 1},
    ].sort((a,b)=>a.sort-b.sort));
    const [sort, setSort] = useState(tasks.length+1);

    let name = "To-do List";
    let taskItems = tasks
        .map((task) => { return <TaskComponent key={task.id} {...task} /> });
    function onTaskCreate(task:Task){
        const newTasks = tasks.slice();
        newTasks.push(task);

        setTasks(newTasks.sort((a,b)=>a.sort-b.sort).map((task,index)=>{
            task.sort = index+1;
            return task;
        }));


        // reset the text area
        const textArea = document.getElementById("createTextArea") as HTMLTextAreaElement;
        textArea.value = "";
        // reset the sort
        setSort(tasks.length+1);

    }
    return <>
        <h1 className="text-xl m-3 mb-6">{name}</h1>
        {taskItems}

        <CreateTaskComponent id="createTaskComponent" defaultSort={sort} onTaskCreate={onTaskCreate} />
    </>;
}