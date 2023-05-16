const Task = ({ id, name, tasks, setTasks }) => {
    const handleClick = () => {
        const filteredArray = tasks.filter((task, key) => key != id)
        setTasks(filteredArray)
    }

    return (
        <li>
            <p>{name}</p>
            <div className="actions">
                <input type="checkbox"/>
                <button onClick={handleClick}>Supprimer</button>
            </div>
        </li>
    )
}

export default Task