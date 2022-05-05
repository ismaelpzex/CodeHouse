// función para sumar
const suma = (a, b) => {
    console.log(`resultado de la suma: ${a + b}`)
}
suma(5, 5)

// función para restar
const resta = (a, b) => {
    console.log(`resultado de la resta: ${a - b}`)
}
resta(5, 50)

// funcion para multiplicar
const multiplicar = (x, y) => {
    console.log(`resultado de la multiplicación: ${x * y}`)
}
multiplicar(90, 90)

//funcion para divir
const dividir = (a, b) => {
    console.log(`resultado de la división: ${a / b}`)
}
dividir(10, 3)

//función para saber si es primo
const esPrimo = numero => {
    let flag = true
    for (let i = 2; i < numero && flag; i++) {
        if (numero % i === 0) {
            flag = false
        }
    }
    return flag
}

console.log(esPrimo())

// test

const randon = () => {
    valor = Math.ceil(Math.random() * 10)
    return valor
} 
console.log(randon())

const superSuma = (a, b) => {
    valor = a + b
    return valor
} 

superSuma(randon(), randon())

console.log('polla')

true ? console.log(true) : console.log(fasle)