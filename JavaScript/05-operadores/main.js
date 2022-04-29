//! OPERADORES MATEMATICOS

// SUMAR => +
const suma = 10 + 7
console.log(suma);

const diez = 10
const siete = 7
const suma2 = diez + siete
console.log({suma2});

//OPERADOR DE SUMA SIRVE TAMBIEN PARA CONCATENAR TEXTOS

const nombre = 'Ismael '
const apellidos = 'De la Poza'
const nombreCompleto = nombre + apellidos
console.log({nombreCompleto})



//RESTAR => -
const resta = 10 + 7
console.log(resta);

const veinte = 20
const ocho = 8
const resta2 = veinte - ocho
console.log({resta2});



// EL OPERADOR DE RESTA INTENTA CONVERTIR EL OTRO ELEMENTO EN NUMBER

const uno = 1
const falso = false
const verdadero = true
const restaCuriosa = uno - verdadero
 // si convertimos un booleano en numero true es 1 y false es 0

console.log({restaCuriosa});



// MULTIPLICACION => *

const dos = 2
const tres = 3
const multiplicacion = dos * tres
console.log({multiplicacion})




// DIVISION => /

const cuatro = 4
const cinco = 5
const division = cuatro / cinco
console.log({division})



// MODULO => (DEVUELVE EL RESTO DE UNA DIVISIÓN)

const seis = 6
const nueve = 9
const modulo = seis % siete
console.log({modulo})



// toFixed()  FLOAT CON NUMERO DETERMINADO DE CARACTERES
// ! OJO QUE ESTA FUNCIÓN DA COMO RESULTADO UN STRING

const divisionInexacta = 10/3
const divisionDosDecimales = divisionInexacta.toFixed(2)
console.log(divisionDosDecimales)


//! PARA TRANSFORMAR CUALQUIER VALOR EN NUMERO (SIEMPRE QUE SE PUEDA)

//? parseInt() TRANSFORMA EL STRING EN UN ENTERO
console.log(parseInt(divisionDosDecimales))

//? parseFloat() TRANSFORMA EL STRING EN UN DECIMAL
console.log(parseFloat(divisionDosDecimales))

//? Number() TRANSFORMA EL STRING EN UN NUMERO
console.log(Number(divisionDosDecimales))
console.log(Number(true))
console.log(Number(false))
console.log(Number(null))


//! OPERADORES DE ASIGNACIÓN

// = Asignar y reasignar de forma normal
let apodo = 'grd'

// += asigna un valor sumando
let peli = 'star wars' // el contenido de la variable seria el string
peli = peli + ' el imperio contra ataca' // el contenido de la variable sería los dos string concatenados
console.log(peli);

//? lo podemos resumir con esto

let pelicula = 'star wars'
pelicula += ' el imperio contra ataca'
console.log(peli); // obtenemos el mismo resultado que arriba, pero ahorrando escribir

// LO TRASLADAMOS A NUMEROS

let numero = 5
numero += 1 // daría 6
numero -=1 // daría 4
numero *=2 // daría 10
numero /=2 // daría 2.5
numero %=2 // daría 1 (el resto de la división)

//! OPERADORES INCREMENTO O DECREMENTO

let incremento = 2
incremento++ //daría 3
incremento-- //daría 1

