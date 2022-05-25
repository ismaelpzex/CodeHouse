//! PROPIEDADES Y METODOS PRIVADOS, NI SE VEN NI SE MODIFICAN FUERA DE LA CLASE

class Moto {
    #ruedas // indicamos que va a haber una propiedad privada
    constructor(model) {
        this.brand = 'Suzuki'
        this.model = model
        this.#ruedas = 2 // asignamos el valor a la propiedad privada.
    }
}

const bandit = new Moto('bandit')
console.log(bandit)

// Si queremos, podemos modificar cualquier propiedad desde fuera del objeto.

bandit.brand = 'suzuki' // le cambiamos el valor a la propiedad brand

// EN EL OBJETO MÁS ARRIBA CREADO VAMOS A PRIVATIZAR LA PROPIEDAD RUEDAS

//Intentamos acceder a la clase ruedas

/* console.log(bandit.#ruedas) */ // PRIVATE FIELD
// ESA PROPIEDAD SOLO SE PUEDE UTILIZAR DENTRO DEL CLASS, //SI UN METODO DE DENTRO DE LA CLASE NECESITA ACCEDER A LA PROPIEDAD, PUEDE HACERLO

//! PROPIEDADES Y METODOS ESTATICOS
//? NO SE USARÁ MUCHO PERO HAY QUE CONOCERLO

class Mates {
    static fibbonacci = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    static PI = 3.1415

    suma(num1, num2) {
        return num1 + num2
    }
    resta(num1, num2) {
        return num1 + num2
    }
    potencia(base, exponente) {
        return base ** exponente
    }
}

const mates1 = new Mates()
console.log(mates1.PI) // ERROR, LLEVA EL STATIC DELANTE
console.log(Mates.PI)

//! RESUMEN, AL PONERLE EL STATIC, SE PUEDE UTILIZAR SIN NECESIDAD DE INSTANCIAR NADA
