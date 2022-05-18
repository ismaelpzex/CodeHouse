import { nanoid } from '../../node_modules/nanoid/nanoid.js';

let allTasks = [
    {
        id: nanoid(),
        task: 'Estudiar Javascript',
        status: 'En curso'
    },
    {
        id: nanoid(),
        task: 'JS de la tarea',
        status: 'Por hacer'
    },
    {
        id: nanoid(),
        task: 'HTML de la tarea',
        status: 'Completada'
    },
]

const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (validation() === false) return
    const task = newTask()
    allTasks = [...allTasks, task]
    displayTasks(allTasks)
})

function validation() {
    if (form.inputTask.value.trim() === '') {
        const errorInput = document.querySelector('#errorInput')
        errorInput.classList.remove('d-none')
        errorInput.classList.add('d-block')
        return false
    } else {
        errorInput.classList.remove('d-block')
        errorInput.classList.add('d-none')
    }
    if (form.status.value.trim() === '') {
        const errorSelect = document.querySelector('#errorSelect')
        errorSelect.classList.remove('d-none')
        errorSelect.classList.add('d-block')
        return false
    } else {
        errorSelect.classList.remove('d-block')
        errorSelect.classList.add('d-none')
    }
    return true
}

function newTask() {
    const task = {
        id: nanoid(),
        task: form.inputTask.value,
        status: form.status.value
    }
    return task
}

function displayTasks(allTasks) {
    const box = document.querySelector('#tasksList')
    box.innerHTML = ''
    allTasks.forEach((task) => {
        const article = newArticle(task)
        box.append(article)
    })
}

function newArticle(task) {
    const article = document.createElement('article')
    article.classList = 'd-flex align-items-center p-2'
    const h2 = document.createElement('h2')
    h2.classList = 'text-textTask fs-6 m-0'
    h2.innerHTML = task.task
    const span = document.createElement('span')
    span.classList = `badge bg-${selectColorFoStatus(task.status)} ms-2`
    span.innerText = task.status
    h2.append(span)
    article.append(h2)
    const btnUpdate = document.createElement('i')
    btnUpdate.classList = 'bi bi-pencil update fs-4 ms-auto'
    article.append(btnUpdate)
    btnUpdate.addEventListener('click', () => { editTask(task) })
    const btnStatus = document.createElement('i')
    btnStatus.classList = 'bi bi-arrow-repeat status fs-4 ms-3'
    article.append(btnStatus)
    btnStatus.addEventListener('click', () => { changeStatus(task) })
    const btnDelete = document.createElement('i')
    btnDelete.classList = 'bi bi-trash delete fs-4 ms-3 me-2'
    article.append(btnDelete)
    btnDelete.addEventListener('click', () => { deleteTask(task) })
    return article
}

function selectColorFoStatus(status) {
    if (status === 'En curso') return 'wip'
    if (status === 'Por hacer') return 'todo'
    if (status === 'Completada') return 'doit'
}

function deleteTask(task) {
    allTasks = allTasks.filter((value) => {
        if (task.id === value.id) {
            return false
        } else {
            return true
        }
    })
    displayTasks(allTasks)
}

function changeStatus(task) {
    allTasks = allTasks.map((value) => {
        if (task.id === value.id) {
            if (value.status === 'Completada') {
                return { ...task, status: 'Por hacer' }
            } else if (task.status === 'Por hacer') {
                return { ...task, status: 'En curso' }
            } else if (task.status === 'En curso') {
                return { ...task, status: 'Completada' }
            }
        } else {
            return value
        }
    })
    displayTasks(allTasks)
}

function editTask(task) {
    const modal = document.createElement('div')
    modal.classList = 'modal fade'
    modal.setAttribute('tabindex', '-1')
    modal.innerHTML = `<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-header">
        <h5 class="modal-title text-headerText">Editar tarea</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-background">
        <input id="inputTask" class="form-control" type="text" placeholder="Introduce tarea...">
        <select class="form-select mt-2" name="status" id="status">
          <option value="">Status</option>
          <option ${task.status === 'En curso' ? 'selected' : ''} value="En curso">En curso</option>
          <option ${task.status === 'Por hacer' ? 'selected' : ''} value="Por hacer">Por hacer</option>
          <option ${task.status === 'Completada' ? 'selected' : ''} value="Completada">Completada</option>
      </select>
      </div>
      <div class="modal-footer bg-footerModal">
        <button type="button" class="btn btn-secondary btn-todo" data-bs-dismiss="modal">Close</button>
        <button id='btnEdit' type="button" class="btn btn-button">Actualizar</button>
      </div>
    </div>
  </div>`
    console.log(task.task)
    const btsModal = new bootstrap.Modal(modal)
    btsModal.show()
    const inputModal = modal.querySelector('#inputTask')
    inputModal.value = task.task
    const status = modal.querySelector('#status')
    status.value = task.status
    const btnEdit = modal.querySelector('#btnEdit')
    btnEdit.addEventListener('click', () => {
        updateTask(task.id, inputModal.value, status.value)
        btsModal.hide()
    })
}

function updateTask (id, title, status) {
    allTasks = allTasks.map((task) => {
        if (id === task.id) {
            return { ...task, task: title, status: status }
        }
        return task
    })
    displayTasks(allTasks)
}

displayTasks(allTasks)