//! MATH

//? Propiedades de math
console.log(`PI -> ${Math.PI}`)
console.log(`Constante de euler -> ${Math.E}`)
console.log(`Raiz cuadrada de 2 -> ${Math.SQRT2}`)

//? Metodos de math
// Raiz cuadrada de un numero
console.log(`raiz cuadrada de 144 -> ${Math.sqrt(144)}`)
// Potencia de un numero
console.log(`potencia 2^2 -> ${Math.pow(2, 2)}`)
// Redondeo de un numero
console.log(`redondeo de 2.3 -> ${Math.round(2.3)}`)
// Redondeo siempre al alza
console.log(`redondeo al alza de 5.1 -> ${Math.ceil(5.1)}`)
// Redondeo siempre a la baja
console.log(`redondeo a la baja de 5.1 -> ${Math.floor(5.1)}`)
// Crear un numero aleatorio
console.log(`numero aleatorio -> ${Math.random()}`)
console.log(`numero aleatorio -> ${Math.ceil(Math.random() * 10)}`)
// Numero más grande de una lista de numeros
console.log(`Numero mas grande de una lista -> ${Math.max(5, 7, 8, 23)}`)
// Numero más pequeño de una lista de numeros
console.log(`Numero mas pequeño de una lista -> ${Math.min(5, 7, 8, 23)}`)

//? Con el operador spread podemos utilizar un array para saber el numero mayor o menor

const num = [1,2,3,4,5,6,7,8,9,0]

let max = Math.max(...num)
let min = Math.min(...num)
 console.log(max)
 console.log(min)


