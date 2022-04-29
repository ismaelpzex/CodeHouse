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

// if => SI SE CUMPLE ESTO, HAZ ESTO

if ( num1 < 5) {
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