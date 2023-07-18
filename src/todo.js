const todoFactory = function (todoName, todoDate) { //date yyyy-mm-dd
    let name = todoName;
    let date = todoDate;

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