import './todoform-style.css';
import { todoFactory } from './todo.js';

const container = document.createElement('div');
container.classList.add('todo-form');

const nameLabel = document.createElement('label');
nameLabel.htmlFor = 'name';
nameLabel.textContent = 'To do name: '

const name = document.createElement('input');
name.id = 'name';
name.type = 'text';

const dateLabel = document.createElement('label');
dateLabel.htmlFor = 'date';
dateLabel.textContent = 'Due date: ';

const date = document.createElement('input');
date.id = 'date';
date.type = 'date';

const cancelButton = document.createElement('button');
cancelButton.classList.add('cancel');
cancelButton.textContent = 'Cancel';

cancelButton.addEventListener('click', () => {
    name.value = "";
    date.value = "";
})

const clearButton = document.createElement('button');
clearButton.classList.add('clear');
clearButton.textContent = 'Clear';

clearButton.addEventListener('click', () => {
    name.value = "";
    date.value = "";
})

const submitButton = document.createElement('button');
submitButton.classList.add('submit');
submitButton.textContent = 'Submit';

submitButton.addEventListener('click', () => {
    if ((name.value != "") && (date.value != "")) {
        let test = todoFactory(name.value, date.valueAsDate);
        console.log(test.getName());
        console.log(test.getDate());
    }
})

container.appendChild(nameLabel);
container.appendChild(name);
container.appendChild(dateLabel);
container.appendChild(date);
container.appendChild(cancelButton);
container.appendChild(clearButton);
container.appendChild(submitButton);

export { container }