export function newProject(projectName) {
    const lastId = Number(localStorage.getItem("projectCounter"));
    const newId = lastId + 1;
    localStorage.setItem("projectCounter", newId)

    const project = {title: projectName, id: newId}
    return project;
}
export function newTask(title, date, priority) {
    const lastId = Number(localStorage.getItem("taskCounter"))
    const newId = lastId + 1;
    const task = {
        title: title,
        date: date,
        priority: priority,
        id: newId,
        projectId: null,  
        isTaskDone: false,}   
    localStorage.setItem("taskCounter", newId);
    return task
}