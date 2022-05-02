// CONDICIONALES

// OPERADORES CONDICIONALES
// < Mayor que
// > Menor que
// >= Mayor o igual que
// <= Menor o igual que
// == Igual que
// === Igual estricto // SE RECOMIENDA EL USO DEL ESTRICTO
//* != Diferente
//* !== Diferente estricto // SE RECOMIENDA EL USO DEL ESTRICTO


const num1 = 7
const num2 = 3
const nombre = 'Ismael'

//! if => SI SE CUMPLE ESTO, HAZ ESTO

if (num1 < 5) {
    console.log(`el numero ${num1} es menor que 5`)
}
console.log(`el numero ${num1} NO es menor que 5`)

if (num2 > 5) {
    console.log(`el numero ${num2} es mayor que 5`)
}
console.log(`el numero ${num2} NO es mayor que 5`);

if (nombre === 'Ismael') {
    console.log(`Coincide el valor de ${nombre} en string y valor`);
}

// OPERADORES PARA AÑADIR MAS PREGUNTAS
// AND && => Necesita que todas las preguntas devuelvan true
// OR || => Necesita que alguna pregunta devuelva true

if (num1 === 7 && nombre === 'Ismael') {
    console.log('Entra en el condicional');
}

if (num1 === 7 || nombre !== 'paco') {
    console.log('entra en el condicional porque se cumple una condicion');
}

//! OJO CON EL SCOPE DE LAS VARIABLES

// SI LA VARIABLE ESTÁ CREADA FUERA DEL CONDICIONAL PODEMOS UTILIZARLA DENTRO
// SI LA VARIABLE ESTÁ CREADA FENTRO DEL CONDICIONAL NO EXISTE FUERA
// SI LA VARIABLE ESTÁ CREADA DENTRO DEL CONDICIONAL CON VAR => var variable = X SE CREA DE FORMA GLOBAL Y SE PUEDE UTILIZAR FUERA

//? JS interpreta algunos valores como true y otros como false por defecto.

if (1) { // como intenta transformar el numero a booleano, el 1 se considera true, entraria en el condicional.
    console.log('true')
}

//! else... -> SI NO SE CUMPLE NADA DE LO ANTERIOR, HAZ ESTO.

if (2 === 2) {
    console.log(`los numeros son iguales.`)
} else {
    console.log(`los numeros NO son iguales.`)
}


//! else if... -> EN CAMBIO, SI SE CUMPLE ESTO, HAZ ESTO.
//Cuando se cumple una condición, las otras se las salta.

if (nombre === 'Ismael') {
    console.log(`Hola ${nombre}`)
} else if (nombre === 'Carlos') {
    console.log(`Hola ${nombre}`)
}

//! switch -> SE USA SOBRE TODO CUANDO TENEMOS OPCIONES CONCRETAS

const color = 'rojo'

switch (color) {
    case 'rojo' : { console.log(`el color es ${color}`)
    break
}
    case 'verde': { console.log(`el color es ${color}`)
    break
}
    case 'amarillo': { console.log(`el color es ${color}`)
    break
}
    default: {
        console.log(`${color} no es un color molongo.`)
    }
}