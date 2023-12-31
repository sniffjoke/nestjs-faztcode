import {Task} from "../interfaces/task.interface";
import {useTasks} from "../context/useTasks";
import {IoCheckmarkDone, IoTrash} from "react-icons/io5";

interface ItemProps {
    task: Task
}

function TaskItem({task}: ItemProps) {
    const {deleteTask, updateTask} = useTasks()

    return (
        <div id={task._id}
             className={'bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer'}>
            <div>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
            <div className={'flex gap-x-2'}>
                {task.done ?
                    (
                    <IoCheckmarkDone
                        className={'text-green-500'}
                        onClick={() => updateTask(task._id, {
                            done: !task.done
                        })}
                    />
                )
                :
                    (
                        <IoCheckmarkDone
                            className={'text-gray-500'}
                            onClick={() => updateTask(task._id, {
                                done: !task.done
                            })}
                        />
                    )}
                    <IoTrash
                        onClick={async () => {
                            if (!window.confirm('Are you sure you want to delete this task?')) return
                            await deleteTask(task._id)
                        }}
                    />
            </div>
        </div>
    )
}

export default TaskItem
