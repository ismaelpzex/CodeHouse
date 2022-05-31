import { nanoid } from 'nanoid'

class ToDo {
    constructor(task, id, isCompleted) {
        this.id = id || nanoid()
        this.task = task
        this.isCompleted = isCompleted || false
        this.date = new Date()
        this.lastModification = new Date()
    }

    completed() {
        this.isCompleted = true
        this.lastModification = new Date()
    }

    unCompleted() {
        this.isCompleted = false
        this.lastModification = new Date()
    }

    update(newTask) {
        this.task = newTask
        this.lastModification = new Date()
    }

}

export default ToDo