// ARRAYS -> sirven para guardar VARIOS VALORES dentro de la misma variable

const nombres = ['Ivan', 'Dario', 'Ismael', 'Lorena', 'Adrian', 'Jose']
const numeros = [23, 34, -15, 5.78]
const variado = [true, 47, '¿Qué tal', null, [undefined, 13], 'zapato']

// LEER DATOS DE ARRAY UTILIZANDO NOMENCLATURA DE CORCHETES

console.log(nombres[0]);
console.log(nombres[nombres.length -1])

// PARA VER ARRAY DENTRO DE ARRAY CONCATENAMOS CORCHETES

console.log(variado[4][1])

// ESCRIBIR DATOS EN UN ARRAY

//! Aunque lo declaremos con const, podemos modificar el array

nombres[6] = 'Pepe'
nombres[nombres.length] = 'Casandra'
console.log(nombres)

