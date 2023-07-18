const todoFactory = function (todoName, taskDate) { //date yyyy-mm-dd
    let name = todoName;
    let date = taskDate;

    const setName = (newName) => {
        name = newName;
    }

    const setDate = (newDate) => {
        date = newDate;
    }

    const getName = () => {
        return name;
    }

    const getDate = () => {
        return date;
    }

    return { setName, setDate, getName, getDate }
}

export { todoFactory }