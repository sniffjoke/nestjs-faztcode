import {CreateTask} from "../interfaces/task.interface";


const API = 'http://localhost:4000/api'

export const createTaskRequest = async (task:CreateTask) => {
    return await fetch(`${API}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getTaskRequest = async () => {
    return await fetch(`${API}/tasks`)
}
