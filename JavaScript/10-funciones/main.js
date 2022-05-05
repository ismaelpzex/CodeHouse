//! MUY IMPORTANTE
//? Diferencia entre guardar en una variable por "valor" o por "referencia"
// Valor
let nombre = 'Ismael'
nombre += ' de la Poza'
// Referencia
const frutas = ['manzana', 'platano']
const otrasFrutas = frutas
otrasFrutas[2] = 'uvas'

console.log(frutas, otrasFrutas) // se guarda en los 2 arrays, tienen ese comportamiento

// para duplicar un array se utiliza un spread operator

const misFrutas = [...frutas]
misFrutas[3] = 'limon'
console.log(frutas) // ORIGINAL
console.log(misFrutas) // DUPLICADO + LIMON

//! FUNCIONES
//? Las funciones son bloques de código reutilizables

//crear la función
function saludo() {
    console.log('Hola')
}

//invocar la función
saludo()

//particularmente si usamos la palabra funcion, podemos invocarla antes de crearla

// da igual donde crees la función, puedes llamarla desde cualquier sitio

despedida()

function despedida() {
    console.log('adios')
}

// para añadirle dinamismo, podemos pasarle parametros

function saludoPersonalizado(nombre) {
    console.log(`Hola, ${nombre}`)
}

saludoPersonalizado('Ismael')

// si no me envian el parámetro, podemos dar un valor por detecto, o resolviendolo dentro de la función

//? VALOR POR DEFECTO

function buenosdias(nombre = 'amijito') {
    console.log(`buenos días ${nombre}`)
}

buenosdias()
buenosdias('Ismael')

//? RESOLVER PROBLEMA DENTRO DE LA FUNCION

function buenasTardes(nombre) {
    // if (nombre !== undefined) <- permitiría poner 0, null...
    if (!nombre) { // <- mientras (todo lo que devuelva false)
        console.log('buenas tardes amijo')
    } else {
        console.log(`buenas tardes ${nombre} `)
    }
}

buenasTardes()
buenasTardes('Ismael')

// Pasar mas de un parámetro

function suma(a, b) {
    console.log(a + b)
}

suma(5, 5)

//! FUNCIONES ANONIMAS
// LA FUNCION NO LLEVA NOMOBRE
// LA METEMOS UNA VARIABLE
// EVITAMOS QUE MODIFIQUEN LA FUNCION

const restar = function (x, y) {
    console.log(`Resta: ${x - y}`)
}
restar(5, 3)

//? A PARTIR DE ES6 SE CREARON LAS ARROW FUCTIONS (funciones flecha)
// se sustituye function (x, y) {}
// por (x, y) => {}

const multiplicar = (x, y) => {
    console.log(`multiplicación: ${x * y}`)
}
multiplicar(90, 90)

// si solo HAY un parametro, podemos quitar los paréntesis

const saludito = nombre => {
    console.log(`hola holita ${nombre}`)
}
saludito('Ismael')