const todo = function (todoName, taskDate) { //date yyyy-mm-dd
    let name = todoName;
    let date = taskDate;

    return { name, date }
}

export { todo }