const todoFactory = function (todoName, taskDate) { //date yyyy-mm-dd
    let name = todoName;
    let date = taskDate;

    return { name, date }
}

export { todoFactory }