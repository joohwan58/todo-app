import './style.css';
import Image from './images/happy-test-screen.jpg';
import { printMe } from './print.js';
import { todoFactory } from './todo.js';
import { projectFactory } from './project.js'

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
let test2 = todoFactory('test task 2', '2023-07-24');
let testProject = projectFactory('test');
console.log(testProject);
testProject.addTodo(test);
console.log(testProject);
testProject.addTodo(test2);
console.log(testProject);
testProject.removeTodo(test);
console.log(testProject);

document.body.appendChild(hello);
document.body.appendChild(serverTest);
document.body.appendChild(fontTest);
document.body.appendChild(Icon);