import { Modal } from 'bootstrap'
import ToDo from './ToDo'
class LotApp {
    constructor() {
        this.allTasks = this.getTasksFromLocalStorage() || []
        this.input = document.querySelector('.inputTask')
        this.box = document.querySelector('.tasksList')
        this.boxPending = document.querySelectorAll('.pending')
        this.input.onkeyup = (event) => this.handleSubmitTask(event)
        this.printTasks(this.allTasks)
        this.pendingTasks
        this.completed = document.querySelectorAll('.filterCompleted')
        this.completed.forEach((filterCompleted) => {
            filterCompleted.onclick = () => this.filterCompleted()
        })
        this.active = document.querySelectorAll('.filterActive')
        this.active.forEach((filterActive) => {
            filterActive.onclick = () => this.filterActive()
        })
        this.all = document.querySelectorAll('.filterAll')
        this.all.forEach((filterAll) => {
            filterAll.onclick = () => this.printTasks(this.allTasks)
        })
        this.all.onclick = () => this.printTasks(this.allTasks)
        this.clear = document.querySelectorAll('.filterClear')
        this.clear.forEach((filterClear) => {
            filterClear.onclick = () => this.filterClear()
        })
        this.getTasksFromLocalStorage()
        this.printTasks(this.allTasks)
        console.log(this.allTasks)
    }

    getTasksFromLocalStorage() {
        this.allTasks = JSON.parse(localStorage.getItem('allTasks')) || []
        this.allTasks = this.allTasks.map((tasks) => {
            return new ToDo(tasks.task, tasks.id, tasks.isCompleted)
        })
    }

    updateTasksOnLocalStorage() {
        localStorage.setItem('allTasks', JSON.stringify(this.allTasks))
    }

    handleSubmitTask(event) {
        if (event.key !== 'Enter') return
        if (this.isTheInputEmpty(this.input)) return
        const newToDo = new ToDo(this.input.value)
        this.allTasks = [...this.allTasks, newToDo]
        this.printTasks(this.allTasks)
        this.updateTasksOnLocalStorage()
    }

    isTheInputEmpty(input) {
        if (input.value.trim() === '') {
            this.input.classList.add('is-invalid')
            return true
        }
        this.input.classList.remove('is-invalid')
        return false
    }

    printTasks(allTasks) {
        this.pendingTasks = 0
        this.box.innerHTML = ''
        allTasks.forEach((task) => {
            const newTask = this.createTasks(task)
            this.box.append(newTask)
            this.pendingTasks++
            this.boxPending.forEach((pending) => {
                pending.textContent = ''
                pending.append(`${this.pendingTasks} Tareas en lista`)
            })
        })
    }

    createTasks(tasks) {
        const li = document.createElement('li')
        li.classList = 'toDo px-3 py-2 border border-secondary text-bg-secondary rounded d-flex shadow border'
        li.textContent = tasks.task
        const isDoItBtn = document.createElement('i')
        const editBtn = document.createElement('i')
        const deleteBtn = document.createElement('i')
        isDoItBtn.classList = `doit icon bi ${!tasks.isCompleted ? 'bi-circle' : 'bi-check-circle'} text-success me-2`
        isDoItBtn.onclick = () => this.isDoIt(tasks)
        editBtn.classList = 'bi bi-pencil ms-auto'
        editBtn.onclick = () => this.editTasks(tasks)
        deleteBtn.classList = 'icon ms-3 bi bi-x-lg'
        deleteBtn.onclick = () => this.deleteTask(tasks)
        li.prepend(isDoItBtn)
        li.append(editBtn, deleteBtn)
        return li
    }

    deleteTask(tasks) {
        this.allTasks = this.allTasks.filter((value) => {
            if (tasks.id === value.id) return false
            return true
        })

        this.printTasks(this.allTasks)
        this.updateTasksOnLocalStorage()
    }

    isDoIt(tasks) {
        if (tasks.isCompleted === false) {
            tasks.completed()
        } else if (tasks.isCompleted === true) {
            tasks.unCompleted()
        }
        this.printTasks(this.allTasks)
        this.updateTasksOnLocalStorage()
    }

    editTasks(tasks) {
        const modal = document.createElement('div')
        modal.className = 'modal fade'
        modal.setAttribute('tabindex', '-1')
        const minutes = tasks.date.getMinutes() < 10 ? `0${tasks.date.getMinutes()}` : tasks.date.getMinutes()
        modal.innerHTML = `<div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header text-center text-bg-secondary p-3">
                <div>
                <h5 class="modal-title">Modo edición</h5>
                <p class="mt-3">Tarea creada: ${tasks.date.getDate()}/${tasks.date.getMonth() + 1}/${tasks.date.getFullYear()} a las ${tasks.date.getHours()}:${minutes}:${tasks.date.getSeconds()}</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-secondary">
                <input class="form-control mb-3 inputEdit" type="text" value="${tasks.task}">
                <p class="text-white d-block">
                Última modificación: ${tasks.lastModification.getDate()}/${tasks.lastModification.getMonth() + 1}/${tasks.lastModification.getFullYear()} a las ${tasks.lastModification.getHours()}:${tasks.lastModification.getMinutes()}:${tasks.lastModification.getSeconds()}
                </p>
            </div>
            <div class="d-flex modal-footer bg-secondary">
            <di>
            
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                <button id="btnEdit" type="button" class="btn btn-success">Guardar</button>
            </div>
        </div>
    </div>`
        const newTask = modal.querySelector('.inputEdit')

        const bootstrapModal = new Modal(modal)
        bootstrapModal.show()

        const btnEdit = modal.querySelector('#btnEdit')
        btnEdit.addEventListener('click', () => {
            if (!this.isTheInputEmpty(newTask)) {
                tasks.update(newTask.value)
                this.printTasks(this.allTasks)
                this.updateTasksOnLocalStorage()
                bootstrapModal.hide()
            }
        })

        modal.addEventListener('hidden.bs.modal', () => {
            modal.remove()
        })
    }

    filterCompleted() {
        const tasksCompleted = this.allTasks.filter((value) => {
            return value.isCompleted
        })
        this.printTasks(tasksCompleted)
    }

    filterActive() {
        const tasksUncompleted = this.allTasks.filter((value) => !value.isCompleted)
        this.printTasks(tasksUncompleted)
    }

    filterClear() {
        this.allTasks = []
        this.pendingTasks = 0
        this.boxPending.forEach((pending) => {
            pending.textContent = ''
            pending.append(`${this.pendingTasks} Tareas en lista`)
        })
        this.printTasks(this.allTasks)
        this.updateTasksOnLocalStorage()
    }
}


export default LotApp
