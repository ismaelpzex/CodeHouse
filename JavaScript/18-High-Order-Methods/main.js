
const frutas = ['peras', 'manzanas', 'limones']
const numeros = [2, 5, 8, 0, 145, 5, 3, -7, -45, 67]


//! .forEach() -> hace lo mismo que un for of pero también te da el indice.

//? MEMOTECNICA -> ES UN FOR OF MEZCLADO CON UN FOR IN

frutas.forEach((index, i) => {
    console.log(`${index} está en la posicion ${i} del array`)
})

numeros.forEach((index, i) => {
    console.log(`el numero ${index} está en la posición ${i} del array`)
})

//! .map() -> MODIFICA los elementos del array y nos devuelve un array nuevo
//! SIEMPRE HAY QUE RETORAR UN VALOR EN EL CALLBACK
//! EL RETURN DEL CALLBACK ES EL PUSH DEL NUEVO ARRAY

//? MEMOTECNICA -> SIEMPRE QUE HAYA QUE MODIFICAR UN ARRAY

const nuevoNumeros = numeros.map((index, i) => {
    return index * 2
})
console.log(numeros)
console.log(nuevoNumeros)

const nuevoFrutas = frutas.map( (index, i) => {
    const fruta = `${index} -> modificado insertado en la posición ${i}`
    return fruta
})
console.log(frutas)
console.log(nuevoFrutas)

//! .filter -> FILTRA un array con una condición if y devuelve un array con los elementos filtrados
//! EL CALLBACK DEBE DE RETORNAR TRUE O FALSE
//! EL RETORNO DEL CALLBACK ES EL PUSH DEL NUEVO ARRAY

const numerosPares = numeros.filter((valor, index) => {
    if ( valor % 2 === 0) return true
})

const numerosParesCortisima = numeros.filter((valor, index) => valor % 2 === 0 )

console.log(numeros)
console.log(numerosPares)
console.log(numerosParesCortisima)

//! .find -> Encuentra y devuelve un único elemento del array.
//! EL CALLBACK DEBE DE RETORNAR TRUE PARA DEVOLVER EL VALOR
//! SI NO LO ENCUENTRA DEVUELVE UNDEFINED

const fruta = frutas.find((valor, index) => {
    if (valor === 'peras') return true
})

console.log(fruta)

//! .some() -> Devuelve true o false si alguno de los elementos del array cumple con la condicion

frutas.some((valor, index) => {
    if (valor === 'peras') {return true}
})

console.log(frutas.some((valor, index) => {
    if (valor === 'peras') {return true}
}) )

//! .every() -> Devuelve true o false si TODOS los elementos del array cumple con la condicion

frutas.some((valor, index) => {
    if (typeof valor === 'string') {return true}
})

console.log(frutas.some((valor, index) => {
    if (typeof valor === 'string') {return true}
}))

//! .sort() -> Ordenar elementos

console.log(numeros.sort())
console.log(frutas.sort())

// el sort a secas trae problemas debido a que ordena a través de los caracteres ascii, por ese motivo, A irá antes que a y el 14 irá antes que el 7. Para evitar eso utilizamos el callback

numeros.sort((a, b) => {
    if (a > b) return 1
    else if (a < b) return -1
})

// MANERA PRO

numeros.sort((a, b) =>  a - b)

console.log(numeros)

//AHORA CON STRING

frutas.sort((a, b) => {
    if (a > b) return 1
    else if (a < b) return -1
})

frutas.sort((a, b) => a - b)

console.log(frutas)