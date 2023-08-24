import {ChangeEvent, FormEvent, useState} from "react";
import {createTaskRequest} from "../api/tasks";

function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: '',
        done: false
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // e.target.name = 'title'
        // e.target.value = 'mi tarea'
        setTask({...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log(task)
        const res = await createTaskRequest(task)
        const data = await res.json()
        console.log(data)
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
                        className={'h-5 w-5 text-indigo-600 pointer'}
                        onChange={(e) => {
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