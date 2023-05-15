const Task = ({ idTask, name, tasks, setTasks }) => {
    const handleClick = () => {
        const filteredArray = tasks.filter(task => task.id != idTask)
        setTasks(filteredArray)
    }

    return (
        <li>
            <p>{name}</p>
            <div>
                <input type="checkbox"/>
                <button onClick={handleClick}>Supprimer</button>
            </div>
        </li>
    )
}

export default Task