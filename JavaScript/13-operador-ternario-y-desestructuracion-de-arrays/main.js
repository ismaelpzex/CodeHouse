//! OPERADOR TERNARIO
//? Es parecido a un if..else.. pero más cortito

if (esPrimo = true) {
    console.log(true)
} else {
    console.log(false)
}

// podemos usar el ternario como un simple if...else

esPrimo === true ? console.log(true) : console.log(false)

// sobre todo el ternario se usa en el sitio donde podrías poner una expresión. Allá donde lo pongas, y según la condicion el ternario tendrá un valor u otro.

let texto
if (esPrimo === true) {
    texto = 'el numero es primo'
} else {
    texto = 'el numero no es primo'
}

texto = esPrimo === true ? 'el numero es primo' : 'el numero no es primo'
console.log(texto)

console.log(`el numero ${esPrimo ? 'es' : 'no es'} primo`)

const minusMayus = (frase, opcion) => {
    return opcion ? frase.toUpperCase() : frase.toLowerCase()
}

console.log(minusMayus('tu amo a veloh', true))

//! OPERADOR DE DESESTRUCTURACIÓN

const frutas = ['pera', 'manzana', 'platano']
const [pera, manzana, platano] = frutas
console.log(pera)

//! NORMAS
//? Da igual el nombre que le pongas a las variables
//? lo importante es el orden en que las creas
//? si no queremos guardar un elemento, tenemos que dejar el hueco separado por -> ,

const [, , fruta3] = frutas
console.log(fruta3)


//! EJEMPLO PRÁCTICO

console.log('========================');

const operaciones = (a, b) => {
    const suma = a + b
    const resta = a - b
    const multiplicacion = a * b
    const division = a / b
    return [suma, resta, multiplicacion, division]
}

const suma = operaciones(2, 6)[0]

console.log(suma);