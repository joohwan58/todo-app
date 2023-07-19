import './style.css';

import { todoFactory } from './todo.js';
import { projectFactory } from './project.js'
import { app } from './app.js';
import { checkDueDate } from './dateComparison.js';

let testDate = new Date(2023, 6, 27);

console.log(checkDueDate.currentDate);

console.log(checkDueDate.overdue(testDate));
console.log(checkDueDate.dueToday(testDate));
console.log(checkDueDate.dueThisWeek(testDate));