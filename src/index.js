import './style.css';

import { todoFactory } from './todo.js';
import { projectFactory } from './project.js'
import { app } from './app.js';
import { checkDueDate } from './dateComparison.js';
import { convertTodoHTML } from './todoHTML';
import { container } from './todoFormHTML';

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');

let testTodo = todoFactory('test todo', new Date(2023, 6, 23));

const testTodoHTMLObject = convertTodoHTML(testTodo);

document.body.appendChild(mainContent);
mainContent.appendChild(testTodoHTMLObject.todoElement);
mainContent.appendChild(container);


testTodoHTMLObject.todoObject.setName('test 2');
testTodoHTMLObject.update();