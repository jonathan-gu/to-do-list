import Task from "./Task"
import { useState } from "react"

const List = () => {
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [lastId, setLastId] = useState(0)

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const handleAddTask = (event) => {
        event.preventDefault()
        if (newTask != "") {
            setTasks([...tasks, {id: lastId + 1, name: newTask}])
            setLastId(lastId + 1)
            setNewTask("")
            const input = document.querySelector("input")
            input.value = ""
        }
    }

    return (
        <>
            <header>
                <h1>Liste de tâches</h1>
            </header>
            <form onSubmit={handleAddTask}>
                <input onChange={handleChange} id="input" />
                <button onClick={handleAddTask}>Ajouter</button>
            </form>
            <ul>
                {tasks.map(task => {
                    return (<Task key={task.id} idTask={task.id} name={task.name} tasks={tasks} setTasks={setTasks} />)
                })}
            </ul>
        </>
    )
}

export default List