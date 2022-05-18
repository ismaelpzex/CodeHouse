//DEFINICION: Una HOF es una función que recibe como parámetro otra función o también puede retornar una funcion.



// la siguiente función sólo repite codigo 10 veces, lo que sea que vaya a repetir esas 10 veces, se lo pasamos como parámetro.

const hastaDiez = (texto) => {
    for (let i = 1; i <= 10; i++) {
        console.log(texto + i)
    }
}

hastaDiez('hello')


//! Gracias a la HOF podemos repetir 9 veces LO QUE QUERAMOS (función)
const hastaNueve = (funcionCualquiera) => {
    for (let i = 1; i <= 9; i++) {
        funcionCualquiera()
    }
}


const despedir = (nombre) => {
    console.log(`adios ${nombre}`)
}

despedir('Ismael')
// llamamos a la función hastaNueve, para que repita 9 veces la función despedir()
hastaNueve(( ) => despedir('ismael'))

/* ======================================================== */

// Vamos a crear una HOF, que además de repetir código, envie un valor con parametro

const hastaCinco = (funcion) => {
    for (let i = 1; i <= 5; i++) {
        funcion(i)
    }
}

// PODEMOS USAR LA HOF, sin el parámetro

hastaCinco(() => { console.log('veinte') })

// AHORA VAMOS A USAR ESE PARÁMETRO

hastaCinco( (i) => {console.log(i)})

/* ====================================================== */

// VAMOS A CREAR UNA HOF QUE RECORRA UN ARRAY DE PRINCIPIO A FIN

const recorredorDeArrays = (array, funcion) => {
    for (let i = 0; i < array.length; i++) {
        funcion(array[i], i) // a la función le regalo el elemento del array y el index
    }
}

const frutas = ['peras', 'limones', 'manzanas']
const numeros = [3, 7, 14, 42, 25, 64]

recorredorDeArrays(frutas, (fruta) => { console.log(fruta) })
recorredorDeArrays(numeros, (numero) => { console.log(numero) })
recorredorDeArrays(frutas, (fruta, index) => { console.log(`${fruta} está en la posición ${index} del array`) })
