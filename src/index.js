import './style.css';
import Image from './happy-test-screen.jpg';
import { printMe } from './print.js';

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

document.body.appendChild(hello);
document.body.appendChild(serverTest);
document.body.appendChild(fontTest);
document.body.appendChild(Icon);