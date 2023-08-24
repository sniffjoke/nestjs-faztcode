import {ChangeEvent, FormEvent, useState} from "react";
import {createTaskRequest} from "../api/tasks";
<<<<<<< HEAD
=======
import {useTasks} from "../context/useTasks";
>>>>>>> f07b077 (add controller create task)

function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: '',
        done: false
    })

<<<<<<< HEAD
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // e.target.name = 'title'
        // e.target.value = 'mi tarea'
=======
    const {createTask} = useTasks()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
>>>>>>> f07b077 (add controller create task)
        setTask({...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
<<<<<<< HEAD
        // console.log(task)
        const res = await createTaskRequest(task)
        const data = await res.json()
        console.log(data)
=======
        createTask(task)
>>>>>>> f07b077 (add controller create task)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name={'title'}
                    className={'border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2'}
                    placeholder={'Write a title'}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    rows={3}
                    className={'border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2'}
                    placeholder={'Write a title'}
                    onChange={handleChange}
                >

                </textarea>
                <label htmlFor="" className={'inline-flex items-center gap-x-2'}>
                    <input
                        type="checkbox"
<<<<<<< HEAD
                        className={'h-5 w-5 text-indigo-600 pointer'}
                        onChange={(e) => {
=======
                        className={'h-5 w-5 text-indigo-600 hover:cursor-pointer'}
                        onChange={() => {
>>>>>>> f07b077 (add controller create task)
                            // console.log(e.target.checked)
                            setTask({...task, done: !task.done})
                        }
                        }
                    />
                    <span>Done</span>
                </label>
                <button
                    className={'bg-indigo-500 px-3 block py-2 w-full'}
                >
                    Save
                </button>
            </form>
        </div>
    )
}

export default TaskForm
