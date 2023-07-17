const projectFactory = (projectTitle) => {
    let title = projectTitle;
    let todos = [];

    const addTodo = (toBeAdded) => {
        todos.push(toBeAdded);
    }

    const removeTodo = (toBeRemoved) => {
        let remove = todos.indexOf(toBeRemoved);

        let newTodos = todos.splice(remove, 1);
        todos = newTodos;
    }

    return { title, todos, addTodo, removeTodo };
}

export { projectFactory }