import { updateTaskDone, getTasks, storeTask } from './storage.js';
import { newTask } from './data.js';
import './styles.css';

const cardContainer = document.createElement('div')


export function addCard(task) {
  const cardDiv = document.createElement('div')
  const checkBox = document.createElement('input')

  checkBox.type = 'checkbox'
  checkBox.checked = task.isTaskDone

  const taskTitle = document.createElement('h3')
  taskTitle.textContent = task.title

  const taskDate = document.createElement('p')
  taskDate.textContent = task.date

  const taskPriority = document.createElement('p')
  taskPriority.textContent = task.priority

  checkBox.addEventListener('change', () => {
    updateTaskDone(task.id, checkBox.checked)
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

const nav = document.createElement('nav')


const navNewTaskButton = document.createElement('button')
navNewTaskButton.textContent = 'New Task'
nav.appendChild(navNewTaskButton)

const popUp = document.createElement('div')

const titleInput = document.createElement('input')
const dateInput = document.createElement('input')
dateInput.type = 'date'

const priority = document.createElement('select')
const lowPriority = document.createElement('option')
const mediumPriority = document.createElement('option')
const highPriority = document.createElement('option')
lowPriority.textContent = 'Low'
lowPriority.value = 'low'
mediumPriority.textContent = 'Medium'
mediumPriority.value = 'medium'
highPriority.textContent = 'High'
highPriority.value = 'high'
priority.appendChild(lowPriority)
priority.appendChild(mediumPriority)
priority.appendChild(highPriority)

const submitTaskButton = document.createElement('button')
submitTaskButton.textContent = 'set task'

popUp.appendChild(titleInput)
popUp.appendChild(dateInput)
popUp.appendChild(priority)
popUp.appendChild(submitTaskButton)

navNewTaskButton.addEventListener('click', () => {
  document.body.appendChild(popUp)
})

submitTaskButton.addEventListener('click', () => {
  const task = newTask(titleInput.value, dateInput.value, priority.value)
  storeTask(task)
  renderCards()
  popUp.remove()
  titleInput.value = ''
  dateInput.value = ''
  priority.value = 'low'
})

const containerWrapper = document.createElement('div');
containerWrapper.classList.add("containerWrapper");
containerWrapper.appendChild(nav);
containerWrapper.appendChild(cardContainer);
document.body.appendChild(containerWrapper);