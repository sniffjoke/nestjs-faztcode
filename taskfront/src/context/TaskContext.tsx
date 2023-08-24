import {createContext, FC, ReactNode, useEffect, useState} from "react";
import {createTaskRequest, getTaskRequest} from "../api/tasks";
import {CreateTask, Task} from "../interfaces/task.interface";

interface TaskContextValue {
    tasks: Task[],
    createTask: (task: CreateTask) => void
}

export const TaskContext = createContext<TaskContextValue>({
    tasks: [],
    createTask: () => {}
})

interface TaskProviderProps {
    children: ReactNode
}

export const TaskProvider: FC<TaskProviderProps> = ({children}) => {

    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        getTaskRequest()
            .then(response => response.json())
            .then(data => setTasks(data))
    }, [])

    const createTask = async (task: CreateTask) => {
        console.log(task)
        const res = await createTaskRequest(task)
        const data = await res.json()
        setTasks([...tasks, data])
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}
