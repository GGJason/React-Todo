import {useState} from "react";

export default function CreateTaskComponent({defaultSort,onTaskCreate}) {
    const [createTaskText, setCreateTaskText] = useState<string>("");
    const [sort, setSort] = useState(defaultSort);

    function createTask(){

        if(createTaskText.length == 0){
            return;
        }
        onTaskCreate({id:sort, title:createTaskText,sort:sort});

    }
    function textAreaChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setCreateTaskText( e.target.value);


    }
    function sortChange(e:React.ChangeEvent<HTMLInputElement>){
        setSort(parseInt(e.target.value));
    }
    return <>
        <div className="p-1">
            <div className="p-1">
                <label>Title</label>
                <textarea id="createTextArea"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={textAreaChange}></textarea>
            </div>
            <div className="p-1">

                <label>Sort</label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="number" onChange={sortChange} value={sort}
                    defaultValue={sort}></input>
            </div>
            <div className="p-1">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                        onClick={createTask}>Create Task
                </button>
            </div>
        </div>
        </>
}