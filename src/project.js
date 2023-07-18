const projectFactory = (projectTitle) => {
    let title = projectTitle;
    let todos = [];

    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const getTitle = () => {
        return title;
    }

    const addTodo = (toBeAdded) => {
        todos.push(toBeAdded);
    }

    const removeTodo = (toBeRemoved) => {
        let remove = todos.indexOf(toBeRemoved);

        let newTodos = todos.splice(remove, 1);
        todos = newTodos;
    }

    const getTodos = () => {
        return todos;
    }

    return { getTitle, setTitle, getTodos, addTodo, removeTodo };
}

export { projectFactory }