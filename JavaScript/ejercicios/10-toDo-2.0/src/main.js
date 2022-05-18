// Fetch DOM elements
const form = document.querySelector('#main-form')
const taskSection = document.querySelector('#task-section')
const inputTask = document.querySelector('#newTask')
const taskList = document.querySelector('#taskList')
const howToUse = document.querySelector('#howToUse')
error.style.display = "none"

const intro = () => {
    const task = document.createElement('h3')
    const deleteBtn = document.createElement('span')
    task.classList.add('task', 'fs-6', 'd-flex', 'gap-2', 'mt-3')
    deleteBtn.classList.add('ms-auto', 'delete-task')
    task.append('Tarea de ejemplo ( ✅ / 📝 )')
    deleteBtn.innerHTML = '🗑'
    task.append(deleteBtn)
    taskSection.append(task)
    form.reset()
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove()
    })
}

intro()

const changeStatus = () => {
    console.log('hola')
}

// Function of form submit
const handlesubmit = (event) => {
    event.preventDefault()
    const newTask = form.newTask.value

    if (newTask.trim() === "" || newTask.length < 4) {
        let error = document.querySelector('#error')
        error.style.display = "block"
        inputTask.style.boxShadow = "0px 0px 30px red"
        inputTask.focus()
        return
    } else {
        error.style.display = "none"
        inputTask.style.boxShadow = 'none'
    }


    let status = form.status.checked
    const task = document.createElement('h3')
    const deleteBtn = document.createElement('span')
    const changeStatus = document.createElement('span')
    task.classList.add('task', 'fs-6', 'd-flex', 'gap-2', 'mt-3')
    deleteBtn.classList.add('ms-auto', 'delete-task')
    changeStatus.classList.add('ms-2',)
    

    status = status ? '  ✅' : '  📝'
    changeStatus.innerHTML = '🆗'
    task.append(newTask + status)
    deleteBtn.append('🗑')
    task.append(deleteBtn)
    deleteBtn.before(changeStatus)
    taskSection.append(task)
    form.reset()

        // Listener changeStatus

        changeStatus.addEventListener('click', () => {
        const oldStatus = changeStatus.parentElement.firstChild.textContent
        if ( oldStatus.includes('📝') ) {
            let newStatus = oldStatus.slice(0, oldStatus.indexOf('📝')-1) + ' ✅'
            task.remove()
            const newTask = document.createElement('h3')
            const newDeleteBtn = document.createElement('span')
            newTask.classList.add('task', 'fs-6', 'd-flex', 'gap-2', 'mt-3')
            newDeleteBtn.classList.add('ms-auto', 'delete-task')
            newDeleteBtn.append('🗑')
            taskSection.append(newTask)
            newTask.append(newStatus)
            newTask.append(deleteBtn)
        } 
    })

    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove()
    })
    
    howToUse.remove()
    inputTask.focus()

}

// Add listener to form submit 
form.addEventListener('submit', (event) => handlesubmit(event))
