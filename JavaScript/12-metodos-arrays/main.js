const frutas = ['manzana','pera','platano','uva']
const numeros = [2,13,-5,40]


//! METODOS ARRAYS
// Array.isArray() -> Devuelve true si lo que hay dentro es un array
console.log(Array.isArray(frutas));

//? LOS 4 SIGUIENTES ELEMENTOS MUTAN EL ARRAY ORIGINAL

//push() -> añade un elemento AL FINAL DEL ARRAY
//? permite añadir varios elementos de golpe
console.log(frutas)
frutas.push('mandarinas')
frutas.push('melocoton','limon')
console.log(frutas)

//pop() -> quita un elemento del FINAL DEL ARRAY, (no hace falta pasarle valores)
frutas.pop()
console.log(frutas)

//unshift() -> añade un elemento AL PRINCIPIO DEL ARRAY
console.log(frutas)
frutas.unshift('tomate')
console.log(frutas)

//shift() -> quita un elemento del PRINCIPIO DE ARRAY
console.log(frutas)
frutas.shift()
console.log(frutas);

//! ---------------------------------------------------

//indexOf -> devuelve el indice de la posición donde esté el valor parametrizado
console.log(numeros.indexOf(13))
console.log(numeros.indexOf(14)) // No existe, me devuelve -1

//reverse() -> INVIERTE el orden de los elementos del array
//! OJO QUE ESTE MUTA
console.log(numeros);
console.log(numeros.reverse());

//join() -> retorna un string con el separador que le indiquemos
const frase = "mola mucho estudiar javascript"
const fraseArray= frase.split(' ')
console.log(fraseArray)
const frase2 = fraseArray.join(' ')
console.log(frase2);

//! QUITAR O SUSTITUIR ELEMENTOS DE UN ARRA

//slice() -> retorna un pedazo del array y no lo muta
console.log(frutas.slice(2,5)) // <- retorna desde la posición 2 o la posicion 5 del array
const unaFruta = frutas.slice(0,1)
console.log(unaFruta)

//splice() -> elimina trozos del array original Y SI LO MUTA
//! OJO QUE LO MUTA
console.log(frutas)
frutas.splice(2,3) //indicamos donde empieza y a partir de ahí, cuantos quieres elminar
console.log(frutas)
//? como particularidad, el splice te permite SUSTITUIR en el LUGAR DE LOS ELIMINADOS los elementos que quieras

console.log(frutas)
frutas.splice(0,2, 'albaricoque', 'lechuga,')
console.log(frutas)