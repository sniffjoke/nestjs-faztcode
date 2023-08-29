import {Task} from "../interfaces/task.interface";

interface ItemProps {
    task: Task
}

function TaskItem({task}: ItemProps) {
    return (
        <div id={task._id}
             className={'bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer'}>
            <div>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
            <div className={'flex gap-x-2'}>
                <button>update</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default TaskItem
