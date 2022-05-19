//! LOCALSTORAGE
//* 1 Sólo permite guardar strings


const nombre = 'Ismael'
const edad = 35
const array = [1, 2, 3]
const objeto = {
    fruta: 'platano',
    cantidad: 7
}

//! Meter algo a LocalStorage -> setItem()

localStorage.setItem('nombre', nombre)
localStorage.setItem('edad', edad)
localStorage.setItem('numeros', array) // LocalStorage lo guarda como string // DA PROBLEMAS
localStorage.setItem('objeto', objeto) // LocalStorage lo guarda como string // DA PROBLEMAS


//! Coger algo de LocalStorage -> getItem()

console.log(localStorage.getItem('nombre'))
console.log(localStorage.getItem('edad'))
console.log(localStorage.getItem('numeros')) // PROBLEMAS
console.log(localStorage.getItem('objeto')) // PROBLEMAS

// PARA SOLUCIONAR EL TEMA DE ARRAYS y OBJETOS USAMOS OTRO OBJETO QUE VIENE CON JS

//! JSON

//! Convertir cualquier cosa en un string auténtico

const frutas = ['manzana', 'pera', 'limon']
const platano = {
    fruta: 'platano',
    cantidad: 7
}
const frutasString = JSON.stringify(frutas)
console.log(frutasString)
const platanoString = JSON.stringify(platano)
console.log(platanoString)

localStorage.setItem('platano', platanoString)
localStorage.setItem('frutas', frutasString)

const arrayFrutas = localStorage.getItem('frutas') // NOS DEVUELVE UN STRING

//! Conseguir objetos y arrays autenticos a partir de un string
//! JSON.parser()

const arrayFrutasConstruido = localStorage.getItem('frutas')
const arrayNoString = JSON.parse(arrayFrutasConstruido)
console.log(arrayFrutasConstruido)

const arrayMovies = [
    {
    nombre: 'pelicula',
    genero: 'genero'
    }
]

localStorage.setItem('array2', JSON.stringify(arrayMovies))
const objetoss = JSON.parse(localStorage.getItem('array2'))
console.log(objetoss)

//! Eliminar un elemento de localStorage
localStorage.removeItem('frutas')

//! borrar todos los elementos de localStorage
/* localStorage.clear() */
