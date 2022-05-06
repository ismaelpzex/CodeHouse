
const frutas = ['platanos', 'bananas', 'piñas', 'manzanas', 'peras', 'Uvas', 'pomelos']

//=================== 1 ================

/* const myIndexOff = (valor, array) => {
    let posicion = -1
    for (i in array) {
        if (array[i] === valor) {
            posicion = i
        }
    }
    return posicion
}

console.log(myIndexOff('platano', frutas)) */

//=================== 2 ================

/* const myJoin = (array) => {
    let string = ''
    for (let i of array) {
        string += `${i}, `
    }
     string = string.slice(0, (string.length -2))

    return string  
} 
console.log(myJoin(frutas)) */

//=================== 3 ================

/* const myReverse = (array) => {
    const newArray = []
    for (i in array) {
        newArray.unshift(array[i])
    }
    return newArray
}

console.log(myReverse(frutas)) */

//=================== 4 ================

/* const array = [1, 5, 80, -80, 15, 100]
const myMax = (array) => {
    let mayor = 0
    for (i of array) {
        if (i > mayor) {
            mayor = i
        }
    }
    return mayor
}

console.log(myMax(array)) */

//=================== 5 ================


/* const myCapitalize = (string) => {
    let newString
    newString = string.slice(0, 1).toUpperCase() + string.slice(1)
    return newString
}

console.log(myCapitalize('banana')) */

//=================== 6 ================

/* const myCompare = (a, b) => {
    return a > b ? a : b
}
console.log(myCompare(5, 6)) */

//=================== 7 ================

/* const compare = (a, b) => {
    return a === b ? true : false
}
console.log(compare(6, 6)) */

//=================== 8 ================
let quit = false
let action
let num1, num2
while (quit === false) {
    let action = prompt(`CALCULADORA
    elije una opción, se pedirán dos numeros!!!
    Sumar (S)
    Restar (R)
    Multiplicar (M)
    Dividir (D)
    Exponencial (E)
    Porcentaje (P)
    Salir (X)`)
    if (action === 's') {
        suma()
    }
    if (action === 'r') {
        resta()
    }
    if (action === 'm') {
        multiplicacion()
    }
    if (action === 'd') {
        debugger
        division()
    }
    if (action === 'p') {
        porcentaje()
    }
    if (action === 'e') {
        let num1 = Number(prompt('introduce un numero'))
        let num2 = Number(prompt('introduce la potencia'))
        const potencia = (a, b) => {
            resultado = Math.pow(a, b)
            return resultado
        }
        alert(`${a} elevado ${b} = ${potencia(a, b)}`)
    }
    if (action === 'x') quit = true
    if (action === null) quit = true // <- habilitar/deshabilitar cancelar (DESHABILITADO)
}

function suma() {
    capturaDatos()
    const suma = (a, b) => {
        resultado = a + b
        return resultado
    }
    alert(`${a} + ${b} = ${suma(a, b)}`)
}

function capturaDatos() {
 a = Number(prompt('introduce el primer numero'))
 b = Number(prompt('introduce el segundo numero'))
}

function resta() {
    capturaDatos()
    const resta = (a, b) => {
        resultado = a - b
        return resultado
    }
    alert(`${a} - ${b} = ${resta(a, b)}`)
}

function multiplicacion() {
    capturaDatos()
    const multiplicacion = (a, b) => {
        resultado = a * b
        return resultado
    }
    alert(`${a} * ${b} = ${multiplicacion(a, b)}`)
}

function division() {
    capturaDatos()
    const division = (a, b) => {
        resultado = a / b
        return resultado
    }
    alert(`${a} / ${b} = ${division(a, b)}`)
}

function porcentaje() {
    capturaDatos()
    const porcentaje = (a, b) => {
        resultado = (a * b) / 100
        return resultado
    }
    alert(`${b} porciento de ${a} = ${porcentaje(a, b)}`)
}
