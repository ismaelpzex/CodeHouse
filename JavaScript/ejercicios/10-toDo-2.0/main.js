const form = document.querySelector('form')
const newTaskText = document.getElementById('input-task')
const button = document.getElementById('button')
let newTask
const task = document.querySelector('#task')
const doit = document.querySelector('#check')
const deleteTask = document.getElementById('#delete')
const singleTask = document.querySelector('#single-task')


button.addEventListener('click', (event) => { 
    event.preventDefault()
    newTask = newTaskText.value
    console.log(newTask)
    let newTag = document.createElement('h3')
    newTag.classList.add('single-task')
    let deleteTag = document.createElement('span')
    deleteTag.classList.add('delete')
    deleteTag.innerHTML = "X"
    doit.checked === true ? newTag.innerHTML = `${newTask}. Estado: Completado` : newTag.innerHTML = `${newTask}. Estado : Por hacer`
    task.append(newTag)
    newTag.append(deleteTag)
    form.reset()
})

/* button.addEventListener('click', (event) => {
    if (doit.checked === true) {
        event.preventDefault()
        newTask = newTaskText.value
        let newTag = document.createElement('h3')
        newTag.classList.add('single-task')
        let deleteTag = document.createElement('span')
        deleteTag.classList.add('delete')
        deleteTag.innerHTML = "X"
        newTag.innerHTML = `${newTask}. Estado: Completado`
        task.append(newTag + deleteTag)
        newTag.append(deleteTag)
        form.reset()
    } else {
        event.preventDefault()
        newTask = newTaskText.value
        let newTag = document.createElement('h3')
        newTag.classList.add('single-task')
        let deleteTag = document.createElement('span')
        deleteTag.classList.add('delete')
        deleteTag.innerHTML = "X"
        newTag.innerHTML = `${newTask}. Estado : Por hacer`
        task.append(newTag)
        newTag.append(deleteTag)
        form.reset()
    }
}) */








/* let singleTask = document.querySelector('#single-task')
console.log(singleTask)

singleTask.childNodes[1].addEventListener('click', () => {
    singleTask.remove()
}) */