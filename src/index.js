import './style.css';
import Image from './images/happy-test-screen.jpg';
import { printMe } from './print.js';

import { todoFactory } from './todo.js';
import { projectFactory } from './project.js'
import { app } from './app.js';

console.log('hello world');
printMe();
const hello = document.createElement('h1');
hello.textContent = 'test';

const serverTest = document.createElement('h1');
serverTest.textContent = 'testing live reload';

const fontTest = document.createElement('h2');
fontTest.textContent = 'testing font';

const Icon = document.createElement('img');
Icon.src = Image;

let test = todoFactory('test task', '2023-07-24');
let test2 = todoFactory('test task 2', '2023-07-25');

let testProject = projectFactory('testing');
testProject.addTodo(test);
testProject.addTodo(test2);

let testProject2 = projectFactory('testing2');
testProject2.addTodo(test);
testProject2.addTodo(test2);

app.addProject(testProject);
app.addProject(testProject2);

app.defaultProject.addTodo(test);
app.defaultProject.addTodo(test2);


app.updateDaily();

let date = new Date();

console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());



document.body.appendChild(hello);
document.body.appendChild(serverTest);
document.body.appendChild(fontTest);
document.body.appendChild(Icon);