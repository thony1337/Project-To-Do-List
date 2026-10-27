import {updateTaskDone, getTasks} from './storage.js'

const cardContainer = document.createElement('div');
document.body.appendChild(cardContainer)

export function addCard(task){ 
    const cardDiv = document.createElement('div');
    const checkBox = document.createElement('input');

checkBox.type = 'checkbox';
checkBox.checked = task.isTaskDone;

const taskTitle = document.createElement('h3')
taskTitle.textContent = task.title

const taskDate = document.createElement('p')
taskDate.textContent = task.date

const taskPriority = document.createElement('p')
taskPriority.textContent = task.priority

checkBox.addEventListener('change', ()=> {
    updateTaskDone(task.id, checkBox.checked);
    cardDiv.classList.toggle('done', checkBox.checked)
})
cardDiv.classList.toggle('done', task.isTaskDone)
cardDiv.appendChild(checkBox)
cardDiv.appendChild(taskTitle)
cardDiv.appendChild(taskDate)
cardDiv.appendChild(taskPriority)
cardContainer.appendChild(cardDiv)
}
export function renderCards() {
  cardContainer.textContent = ''
  const tasks = getTasks()
  for (const task of tasks) {
    addCard(task)
  }
}