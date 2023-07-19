import format from "date-fns/format";
import checked from './images/checkbox-check-svgrepo-com.svg'
import unchecked from './images/checkbox-unchecked-svgrepo-com.svg'
import editIcon from './images/edit.svg'
import deleteIcon from './images/delete.svg'
import './todo-style.css'

const convertTodoHTML = (todo) => {
    let todoObject = todo;

    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');

    const name = document.createElement('p');
    name.textContent = todoObject.getName();
    name.classList.add('todo-name');

    const date = document.createElement('p');
    date.textContent = 'Due ' + format(todoObject.getDate(), 'MM/dd/yyyy');

    const checkbox = document.createElement('img');
    checkbox.src = unchecked;
    checkbox.classList.add('complete-checkbox');
    checkbox.addEventListener('click', () => {
        if (checkbox.src == unchecked) {
            checkbox.src = checked;
            name.textContent += " (Completed)"
            name.style.textDecoration = 'line-through';
            date.style.textDecoration = 'line-through';
        } else {
            checkbox.src = unchecked;
            name.textContent = todoObject.getName();
            name.style.textDecoration = 'none';
            date.style.textDecoration = 'none';
        }
    });

    const editButton = document.createElement('img');
    editButton.src = editIcon;
    editButton.classList.add('edit');
    editButton.addEventListener('click', () => {
        alert('add edit function');
    })

    const deleteButton = document.createElement('img');
    deleteButton.src = deleteIcon;
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        alert('add delete function');
    })

    todoElement.appendChild(checkbox);
    todoElement.appendChild(name);
    todoElement.appendChild(date);
    todoElement.appendChild(editButton);
    todoElement.appendChild(deleteButton);

    const update = () => {
        name.textContent = todoObject.getName();
        date.textContent = 'Due ' + format(todoObject.getDate(), 'MM/dd/yyyy');
    }

    return { todoObject, todoElement, update };
}

export { convertTodoHTML }