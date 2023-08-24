<<<<<<< HEAD
import {useEffect, useState} from "react";
import {getTaskRequest} from "../api/tasks";
import {Task} from "../interfaces/task.interface";


function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        getTaskRequest()
            .then(response => response.json())
            .then(data => setTasks(data))
    }, [])
=======
import TaskItem from "./TaskItem";
import {useTasks} from "../context/useTasks";


function TaskList() {
    const {tasks} = useTasks()


>>>>>>> f07b077 (add controller create task)

    return (
        <div>
            {
                tasks.map(task => (
<<<<<<< HEAD
                    <div id={task._id}>
                        <h1>
                            {task.title}
                        </h1>
                        <p>{task.description}</p>
                    </div>
=======
                    <TaskItem task={task} key={task._id}/>
>>>>>>> f07b077 (add controller create task)
                ))
            }
        </div>
    )
}

export default TaskList
