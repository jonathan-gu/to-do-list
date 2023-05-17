const SearchBar = ({ tasks, setTasksFiltered }) => {
    const handleChange = (event) => {
        setTasksFiltered(tasks.filter(task => task.name.includes(event.target.value)))
    }

    return (
        <form>
            <input id="search" onChange={handleChange} placeholder="Rechercher" type="text" />
        </form>
    )
}

export default SearchBar