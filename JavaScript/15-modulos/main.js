//Antes de importar hay que exportar (EN EL OTRO ARCHIVO)

import {sumar} from './operations.js'


let operacion = prompt(`Dime la operación
sumar +
restar -
multiplicar *
dividir /`)
let num1 = prompt('primer numero')
let num2 = prompt('segundo numero')

if (operacion === '+') {
    console.log(sumar(num1, num2))
} else if (operacion === '-') {
    console.log(restar(num1, num2))
} else if (operacion === '*') {
    console.log(multiplicar(num1, num2))
}

