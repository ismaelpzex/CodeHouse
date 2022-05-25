//! POO -> programación orientada a objetos

//? Objeto literal
const coche = {
    //propiedades info
    brand: 'Seat',
    model: 'Leon',
    doors: 5,
    color: 'red',

    //funcionalidad (metodos)
    start: function () {
        console.log('Ruuuuun')
    }
}

//? Palabra this

const yo = {
    nombre: 'Ismael',
    age: 31,
    saludo: function () {
        console.log(`HOLA -> ${this.nombre}`)
    }
}

const persona = {
    name: 'Lorena',
    edad: 29,
    saludo: function () {
        console.log(`Hola ${this.name} que tal?`)
    }
}

yo.saludo()
persona.saludo()

//? OJO this dentro de una arrow fuction, NO FUNCIONA

const vehiculo = {
    brand: 'volkswagen',
    model: 'passat',
    start: () => {
        console.log(`arrancando el ${this.brand} ${this.model}`)
    }
}

console.log(vehiculo.start()) // en arrow function la palabra this hace referencia al objeto window DA ERROR.

// ? Solventamos el problema escribiendo de una manera más comoda la función

const vehiculo2 = {
    brand: 'volkswagen',
    model: 'passat',

    start() {
        console.log(`arrancando el ${this.brand} ${this.model}`)
    }
}
console.log(vehiculo2.start()) // Ya si funciona la palabra this

//! FABRICA DE OBJETOS ----> CLASES

class Coche {
    marca = 'Seat'
    ruedas = 4
    arrancar() { console.log('RUUUUUUN') }
}

//! UTILIZAMOS LA CLASE
//? creamos una NUEVA INSTACIA de coche

const leon = new Coche()
console.log(leon) // vemos que la función, no está. Donde esta??
console.log(leon.arrancar()) // se hace así!!!

//! CLASE DINÁMICA QUE ACEPTA PARAMETROS POR CADA OBJETO
// ? CONSTRUCTOR

class Moto {
    constructor(marca, modelo, cilindrada, color) {
        this.marca = marca
        this.modelo = modelo
        this.cilindrada = cilindrada + 'cc'
        this.color = color
        this.combustible = 'Gasolina'
    }
    arrancar() {
        console.log(`La ${this.marca} ${this.modelo} de ${this.cilindrada} de color ${this.color} ha arrancado utilizando la ${this.combustible} de su depósito`)
    }
}

const bandit = new Moto('Suzuki', 'Bandit', 600, 'azul')
console.log(bandit)
console.log(bandit.arrancar())