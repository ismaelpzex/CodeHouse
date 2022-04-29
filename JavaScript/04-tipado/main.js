//? TIPADO

//? DATOS PRIMITIVOS

// STRING -> cadena de texto, siempre con ''

const nombre = 'Ismael de la Poza'
console.log(nombre)
// si queremos que el string tenga comillas 'string con "comillas"'
const frase = 'string con las "comillas"'
console.log(frase)
// template literals `cadena de texto`
const fraseBracktics = `bracktics en el string`
console.log(fraseBracktics)

//? =======================================================

// NUMERO

const uno = 1
console.log(uno)

//? =======================================================

// BOOLEANOS

const verdadero = true
console.log(verdadero)

//? =======================================================

// UNDEFINIDED (valor no definido)

let marca
console.log(marca)

//? =======================================================

// NULL la diferencia con undefined es que el developer DECIDE PONERLE UN VALOR INDEFINIDO
let soyProgramador = null
console.log(soyProgramador)

//? =======================================================

//para saber el tipo de dato, se usa typeoff ejemplo -> console.log(typeof variable)
console.log(typeof fraseBracktics)
console.log(typeof uno)
console.log(typeof verdadero)
console.log(typeof marca)
console.log(typeof soyProgramador)

//? =======================================================



//? DATOS NO PRIMITIVOS

//ARRAYS

const frutas = ['platano', 'melon', 'sandia']

//? =======================================================

//OBJETOS (varios datos dentro de un elemento)

const persona = {
    nombre: 'Ismael',
    apellidos: 'de la Poza Expósito'
}

//? =======================================================

// FUNCIONES -> codigo que será ejecutado más tarde

function suma(a, b) {
    return a + b
}