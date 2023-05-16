import Task from "./Task"
import { useEffect, useState } from "react"

const List = () => {
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [])

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const handleAddTask = (event) => {
        event.preventDefault()
        if (newTask != "") {
            setTasks([...tasks, {name: newTask, completed: false}])
            setNewTask("")
            const input = document.querySelector("input").value = ""
        }
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    return (
        <>
            <header>
                <h1>Liste de tâches</h1>
            </header>
            <form onSubmit={handleAddTask}>
                <input onChange={handleChange} id="input" type="text" />
                <button onClick={handleAddTask}>Ajouter</button>
            </form>
            <ul>
                {tasks.map((task, index) => {
                    return (<Task check={task.completed} id={index} key={index} name={task.name} tasks={tasks} setTasks={setTasks} />)
                })}
            </ul>
        </>
    )
}

export default List