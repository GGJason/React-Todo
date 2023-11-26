import Task from "@/models/Task";
export default function TaskComponent(task:Task){

    return <>
        <div className="p-3 border border-gray-300 rounded-lg m-2 hover:bg-gray-600 grid-cols-6 gap-4">
            <div className="col-start-3">{task.title}</div>
        </div>
    </>
}