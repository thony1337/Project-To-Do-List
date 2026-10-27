export function getTasks() {
    let tasks = localStorage.getItem('tasks')
    if (tasks === null) {
        tasks= []
    } else {
    tasks = JSON.parse(tasks)
  }
  return tasks
}
export function storeTask(taskObject) {
    const tasks = getTasks()
    tasks.push(taskObject)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
export function storeProject(projectObject) {
    let projects = localStorage.getItem('projects')
    if (projects === null) {
        projects= []
    } else {
    projects = JSON.parse(projects)
  }
  projects.push(projectObject)
  localStorage.setItem('projects', JSON.stringify(projects))
}
export function updateTaskDone(taskId, taskDone) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    for (const task of tasks) {
        if(task.id === taskId) {
           task.isTaskDone = taskDone }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
}