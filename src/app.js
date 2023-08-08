import { projectFactory } from "./project";
import { checkDueDate } from "./dateComparison";

const app = (() => {
    let defaultProject = projectFactory('default');
    let overdue = projectFactory('overdue');
    let dueToday = projectFactory('today');
    let dueWeek = projectFactory('week');

    let projects = [];

    const getProjects = () => {
        return projects;
    }

    const addProject = (toBeAdded) => {
        projects.push(toBeAdded);
    }

    const removeproject = (toBeRemoved) => {
        let remove = projects.indexOf(toBeRemoved);

        let newprojects = projects.splice(remove, 1);
        projects = newprojects;
    }

    const sortDailyWeeklyOverdue = (element) => {
        if (checkDueDate.dueToday(element.getDate())) {
            dueToday.addTodo(element);
        }
        if (checkDueDate.overdue(element.getDate())) {
            overdue.addTodo(element);
        }
        if (checkDueDate.dueThisWeek(element.getDate())) {
            dueWeek.addTodo(element);
        }
    }

    const update = () => {
        let defaultTodos = defaultProject.getTodos();
        defaultTodos.forEach(sortDailyWeeklyOverdue(element));
        projects.forEach((project) => {
            project.forEach(sortDailyWeeklyOverdue(element));
        })
    }

    return { defaultProject, overdue, dueToday, dueWeek, getProjects, addProject, removeproject, update }
})();

export { app }