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

    return (
        <div>
            {
                tasks.map(task => (
                    <div id={task._id}>
                        <h1>
                            {task.title}
                        </h1>
                        <p>{task.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TaskList
