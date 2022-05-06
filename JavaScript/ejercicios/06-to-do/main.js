

// Mini "base de datos"
const allToDos = [
    { id: 1, task: 'Estudiar JavaScript 👨‍🏫', status: "-> do it" },
    { id: 2, task: 'Sacar a las perras 🐕‍🦺', status: "-> to do" },
    { id: 3, task: 'Comprar el pan 🍞', status: "-> to do" }
]
let counterID = 3

const askUserForToDoText = () => {
    let userToDo
    do {
        userToDo = prompt('Dime la nueva tarea:')
    } while (userToDo === null || !isNaN(userToDo) || userToDo.trim() === '')

    return userToDo
}

const createToDo = () => {

    const userToDo = askUserForToDoText()
    const status = '-> to do'
    counterID++
    const newToDo = {
        id: counterID,
        task: userToDo,
        status: status,
    }
    allToDos.push(newToDo)
    alert(`La tarea "${userToDo}" se ha añadido correctamente con status ${status}`)

}

const listToDos = (array) => {
    let list = ""
    for (let toDo of allToDos) {
        list += (`\n ${toDo.id} : ${toDo.task} status: ${toDo.status}`)
    }
    alert(`Listado de tareas: ${list}`)
}

const updateToDo = () => {
    listToDos()
    let task
    do {
        task = prompt('id de tarea a modificar')
    } while (task === null || isNaN(task) || task.trim() === '')
    task = +task
    for (let toDo of allToDos) {
        if (toDo.id === task) {
            let newTask
            do {
                newTask = prompt(`introduce la modificación`)
            } while (newTask === null || !isNaN(newTask) || newTask.trim() === '')

            allToDos[task - 1].task = newTask
            allToDos[task - 1].status = '-> to do'
            alert(`el ${task} de la lista ha sido actualizado con status: -> to do`)
            listToDos()
            return
        }
    }
    alert(`${task} no se ha encontrado en la lista`)
}

const deleteToDo = () => {
    listToDos()
    let taskDelete
    do {
        taskDelete = prompt('id de tarea a modificar')
    } while (taskDelete === null || isNaN(taskDelete) || taskDelete.trim() === '')
    taskDelete = +taskDelete
    console.log(taskDelete)
    for (let toDo of allToDos) {
        if (toDo.id === taskDelete) {
            allToDos.splice(taskDelete - 1, taskDelete)
            listToDos()
            return
        }
    }

}

const newStatus = () => {
    listToDos()
    let task
    do {
        task = prompt('id de tarea a modificar')
    } while (task === null || isNaN(task) || task.trim() === '')
    task = +task
    for (let toDo of allToDos) {
        if (toDo.id === task) {
            let newStatus
            do {
                newStatus = prompt(`selecciona un nuevo status:
                (1) To Do
                (2) WIP (Work in progress)
                (3) Do`)
            } while (newStatus === null || isNaN(newStatus) || newStatus.trim() === '')
            newStatus = Number(newStatus)
            if (newStatus === 1) {
                allToDos[task - 1].status = '-> To Do'
            } else if (newStatus === 2) {
                allToDos[task - 1].status = '-> WIP'
            } else if (newStatus === 3) {
                allToDos[task - 1].status = '-> Do'
            } else {
                do {
                    newStatus = prompt(` ERROR status ${task} no existe
                    selecciona un nuevo status:
                    (1) To Do
                    (2) WIP (Work in progress)
                    (3) Do`)
                } while (newStatus === null || isNaN(newStatus) || newStatus.trim() === '')
            }

                alert(`el ${task} de la lista ha sido actualizado con el status ${newStatus}`)
            listToDos()
            return
        }
    }
    console.error(`${task} no se ha encontrado en la lista`)
}

let menu
do {
    menu = prompt(`
  ¡Bienvenid@ a la lista de tareas 1.0!
  (c) CREAR TAREA
  (r) LEER TAREAS
  (u) ACTUALIZAR TAREA
  (d) BORRAR TAREA
  (s) STATUS

  (x) SALIR
  `)

    // Para salir del menú
    if (menu === 'x' || menu === null) break

    // Opciones del menú
    if (menu === 'c') {
        createToDo()
    } else if (menu === 'r') {
        listToDos()
    } else if (menu === 'u') {
        updateToDo()
    } else if (menu === 'd') {
        deleteToDo()
    } else if ( menu === 's') {
        newStatus()
    } else {
        console.error('Esa opción no mola, y tú tampoco molas.')
    }

} while (true);

console.log('Has acabado, todo borrado.')