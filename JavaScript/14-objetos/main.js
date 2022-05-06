//! OBJETOS
//? nos dan la posibilidad de guardar VARIOS DATOS que hacen referencia a una MISMA COSA

//crear un objeto
let platano

// Propiedades de los objetos (INFORMACIÓN), son como pequeñas variables que se guardan dentro del objeto

// Los objetos siempre funcionan por pares: propiedad: valor

platano = {
    color: 'amarillo',
    procedencia: 'Canarias',
    precio: 2,
    motitas: true,
    tiendas: ['Mercadona', 'Dia', 'Lidl'],
    sabor: {
        dulce: 3,
        amargo: 1,
        salado: 0
    }
}

// Para poder entrar en el objeto, usamos la anotacion del punto -> .

console.log(platano.sabor.dulce)

// Otra manera de acceder a las propiedades de los objetos 
const procedencia = 'procedencia'

console.log(platano['sabor'])
console.log(platano[procedencia])

// Podemos añadir propiedades

platano.caducidad = '22 Agosto 2022'
platano.estaMaduro = true
console.log(platano)

// Podemos recorrer un objeto

for (keys in platano) {
    console.log(keys + ':' + platano[keys])
}

//? ALGO MUY TIPICO QUE NOS ENCONTRAMOS EN BDD Y EN APIS ES TENER UN ARRAY CON MUCHOS OBJETOS
const frutasAPI = [
    {
        id: 1,
        fruta: 'platano'
    },
    {
        id: 2,
        fruta: 'limon'
    },
    {
        id: 3,
        fruta: 'manzana'
    },
    {
        id: 4,
        fruta: 'pera'
    }
]
console.log(frutasAPI[0])
console.log(frutasAPI[0].id)
console.log(frutasAPI[0].fruta)