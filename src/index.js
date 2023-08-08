import './style.css';

import { todoFactory } from './todo.js';
import { projectFactory } from './project.js'
import { app } from './app.js';
import { checkDueDate } from './dateComparison.js';
import { convertTodoHTML } from './todoHTML';
import { container } from './todoFormHTML';

const title = document.createElement('h1');
title.textContent = 'Todo list';

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');

let testTodo = todoFactory('test todo', new Date(2023, 6, 23));

const testTodoHTMLObject = convertTodoHTML(testTodo);

document.body.appendChild(mainContent);
mainContent.appendChild(title);
mainContent.appendChild(testTodoHTMLObject.todoElement);
mainContent.appendChild(container);


testTodoHTMLObject.todoObject.setName('test 2');
testTodoHTMLObject.update();