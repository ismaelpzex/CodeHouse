// Fetch DOM elements
const form = document.querySelector('#main-form')
const taskSection = document.querySelector('#task-section')
const inputTask = document.querySelector('#newTask')
const taskList = document.querySelector('#taskList')
const howToUse = document.querySelector('#howToUse')
console.log(taskList.nextElementSibling)
error.style.display = "none"

const intro = () => {
    const task = document.createElement('h3')
    const deleteBtn = document.createElement('span')
    task.classList.add('task', 'fs-6', 'd-flex', 'gap-2', 'mt-3')
    deleteBtn.classList.add('ms-auto', 'delete-task')
    task.append('Tarea de ejemplo ( ✅ / 📝 )' )
    deleteBtn.innerHTML= '🗑'
    task.append(deleteBtn)
    taskSection.append(task)
    form.reset()
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove()
    })
}

intro()

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
    } else error.style.display = "none"
    

    let status = form.status.checked
    const task = document.createElement('h3')
    const deleteBtn = document.createElement('span')
    task.classList.add('task', 'fs-6', 'd-flex', 'gap-2', 'mt-3')
    deleteBtn.classList.add('ms-auto', 'delete-task')
    status = status ? '  ✅' : '  📝'
    task.append(newTask + status)
    deleteBtn.append('🗑')
    task.append(deleteBtn)
    taskSection.append(task)
    form.reset()
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove()
    })
    howToUse.remove()
}

// Add listener to form submit 
form.addEventListener('submit', (event) => handlesubmit(event) )



// creamos el contenido que trendrá la nueva tarea, h3
// le ponemos las clases
//creamos un nuevo elemento span para el complete