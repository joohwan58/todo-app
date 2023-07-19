import { projectFactory } from "./project";

const app = (() => {
    let defaultProject = projectFactory('default');

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

    return { defaultProject, getProjects, addProject, removeproject }
})();

export { app }