import { projectFactory } from "./project";

const app = (() => {
    let defaultProject = projectFactory('default');
    let dailyProject = projectFactory('daily');
    let weeklyProject = projectFactory('weekly');


    let projects = [];
    const addProject = (toBeAdded) => {
        projects.push(toBeAdded);
    }

    const removeproject = (toBeRemoved) => {
        let remove = projects.indexOf(toBeRemoved);

        let newprojects = projects.splice(remove, 1);
        projects = newprojects;
    }

    return { defaultProject, projects, addProject, removeproject }
})();

export { app }