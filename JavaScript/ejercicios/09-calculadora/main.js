const form = document.querySelector('form')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
const botonSuma = form.sumar
const botonResta = form.restar
const botonMulti = form.multiplicar
const botonDiv = form.dividir

let final = document.getElementById('resultado')
final.innerHTML = 0

const parseNumber = () => {
    num1 = Number(num1.value)
    num2 = Number(num2.value)
}

botonSuma.addEventListener('click', (event) => {
    event.preventDefault()
    parseNumber()
    const suma = num1 + num2
    resultado.innerHTML = suma
    form.reset()
})

botonResta.addEventListener('click', (event) => {
    event.preventDefault()
    parseNumber()
    const resta = num1 - num2
    resultado.innerHTML = resta
    form.reset()
})

botonMulti.addEventListener('click', (event) => {
    event.preventDefault()
    parseNumber()
    const multi = num1 * num2
    resultado.innerHTML = multi
    form.reset()
})

botonDiv.addEventListener('click', (event) => {
    event.preventDefault()
    parseNumber()
    const div = num1 / num2
    resultado.innerHTML = div
    form.reset()
})