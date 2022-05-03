//! BUCLES
//? Se utilizan para repetir codigo un numero determinado de veces.
// para recorrer elementos.

//! BUCLE for..
//? Tiene 3 partes
// inicializar una variable con el valor inicial que queramos
// tenemos que ponerle una condicion
// incrementaremos o decrementaremos variable


for (let variable = 0; variable <= 5; variable++) {
    console.log('SOY UN FOR')
}

// Manera practica de escribir un for

for (let i = 0; i < 5; i++) {
    console.log('soy un bucle for escrito de manera práctica')
}

//? Recorrer un elemento iterable

const array = ['pera', 'manzana', 'platano', 'uva']

for (let i = 0; i < 4; i++) {
    console.log(array[i])
}

//? BREAK, CONTINUE -> para salirnos del bucle o para saltarnos una vuelta

for (let i = 0; i <= 10; i++) {
    console.log(i)
    if (i === 3){
        break // a la 3 vuelta se saldrá del bucle
    }
}

 for (let i = 0; i <= 10; i++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}


//! BUCLE FOR OF
//? Siempre empezará desde la primera posición
//? va de uno en uno
//? siempre llegará hasta el último elemento

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let numero of numeros) {
    console.log(numero)
}


//!BUCLE FOR IN
//? Es igual que el for of, siempre empieza en la primera posicion
//? siempre va de uno en uno
//? siempre llega hata el finla
//! la diferencia es que la variable que pongamos en el for in, SIEMPRE VA A CONVERTIRSE EN EL INDICE EN LA VUELTA EN LA QUE ESTES

const compra = ['peras', 'manzanas', 'limones', 'tomates', 'sandias']

for (let item in compra) {
    console.log(item)
}


//! BUCLE WHILE
//? Mientras se cumpla esto, haz esto
// se suele usar cuando no sabemos exactamente cuantas veces vamos a tener que repetir un codigo


let i = 0
while (i < 10) {
    console.log('soy un bucle while')
    i++
}

// Ejemplo de un while en el que no sabemos cuantas vueltas vamos a dar

let password
while (password !== "1234") {
    password = prompt('escribe la contraseña')
}


//! BUCLE DO WHILE
//? Haz esto primero y luego si se cumple lo repites

let passwd
do {
    passwd = prompt('introduce la contraseña')
}while (passwd !== '1234')