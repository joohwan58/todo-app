import { projectFactory } from "./project";

const app = (() => {
    let defaultProject = projectFactory('default');
    let dailyProject = projectFactory('daily');
    let weeklyProject = projectFactory('weekly');

    const updateDaily = () => {
        let dailyTodos = [];
        defaultProject.getTodos().forEach((element) => {
            console.log(element.getDate());
        })
    }

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

    return { defaultProject, getProjects, addProject, removeproject, updateDaily }
})();

export { app }