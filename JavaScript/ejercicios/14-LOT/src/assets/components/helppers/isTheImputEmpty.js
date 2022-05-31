const isTheInputEmpty = (input) => {
    if (input.value.trim() === '') {
        this.input.classList.add('is-invalid')
        return true
    }
    this.input.classList.remove('is-invalid')
    return false
}

export default isTheInputEmpty