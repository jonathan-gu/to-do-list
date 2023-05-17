import { useEffect, useReducer, useState } from "react"
import Task from "./Task"
import SearchBar from "./SearchBar"

const List = () => {
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [])
    const [tasksFiltered, setTasksFiltered] = useState(tasks)

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const handleAddTask = (event) => {
        event.preventDefault()
        if (newTask != "") {
            setTasks([...tasks, {name: newTask, completed: false}])
            setNewTask("")
            const input = document.getElementById("add").value = ""
        }
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    let result

    if (tasksFiltered.length > 0) {
        result = <ul>
                {tasksFiltered.map((task, index) => {
                    return (<Task check={task.completed} id={index} key={index} name={task.name} tasks={tasks} setTasks={setTasks} />)
                })}
            </ul>
    }
    else {
        result = <h1>Aucune tâche trouvé</h1>
    }

    return (
        <>
            <header>
                <h1>Liste de tâches</h1>
            </header>
            <section>
                <div id="handle">
                    <form onSubmit={handleAddTask}>
                        <input onChange={handleChange} id="add" placeholder="Ajouter une tâche" type="text" />
                        <button onClick={handleAddTask}>Ajouter</button>
                    </form>
                    <SearchBar tasks={tasks} setTasksFiltered={setTasksFiltered} />
                </div>
                {result}
            </section>
        </>
    )
}

export default List