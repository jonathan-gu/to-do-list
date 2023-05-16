const Task = ({ check, id, name, tasks, setTasks }) => {
    const handleCompleted = () => {
        const newTasks = [...tasks]
        newTasks[id].completed = !newTasks[id].completed
        setTasks(newTasks)
    }

    const handleDelete = () => {
        const filteredTasks = tasks.filter((task, key) => key != id)
        setTasks(filteredTasks)
    }

    return (
        <li>
            <p>{name}</p>
            <div className="actions">
                <input onChange={handleCompleted} type="checkbox" checked={check} />
                <button onClick={handleDelete}>Supprimer</button>
            </div>
        </li>
    )
}

export default Task