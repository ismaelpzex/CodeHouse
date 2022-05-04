  //================== 1 ================

let multiplicado = 1

while (multiplicado <= 10) {
    for (let i = 0; i <= 10; i++) {

        console.log(`${multiplicado} X ${i} = ${multiplicado * i}`)
    }
    multiplicado++
}

//================== 2 ================ */

let numero = 75
let numeroUser

while (numeroUser !== numero) {
    numeroUser = prompt('introduce un numero entre el 50 y 100')
    if (numeroUser === null || numeroUser === undefined || numeroUser.trim() === "") {
        numeroUser = alert('introduce un numero entre el 50 y 100 PERO AHORA BIEN')
    } else {
        numeroUser = Number(numeroUser)
        if (numeroUser > numero) {
            alert('el numero es menor, vuelve a intentarlo')
        } else if (numeroUser < numero) {
            alert('el numero es mayor, vuelve a intentarlo')
        }
    }
}

alert('acertaste!!')

//================== 3 ================

let userNumber = prompt('Introduce un numero entre el 2 y el 10')
userNumber = Number(userNumber)

while (userNumber < 2 || userNumber > 10) {
    userNumber = prompt('Introduce un numero entre el 2 y el 10 NI MAS NI MENOS')
    userNumber = Number(userNumber)
}

console.log(userNumber)

for (let i = 0; i <= 10; i++) {
    console.log(`${userNumber} X ${i} = ${userNumber * i}`)
}

//================== 4 ================

let estrellas = 7
let indice = 0
let dibujos = "*"

while (indice < estrellas) {
    console.log(dibujos)
    dibujos = dibujos + dibujos
    indice++
}

//================== 5 ================

const myList= [1,9,3,8,5,7]

for (let item of myList) {
    console.log(item * 2)
    
}

//================== 6 ================

const array = [1,-2,3,-4,5,6,-7,8,9,0]
let positivos = 0
let negativos = 0
let ceros = 0

for (let numeros of array) {
    console.log(numeros)
    if (numeros > 0) {
        positivos++
    } else if (numeros < 0) {
        negativos++
    } else if (numeros === 0) {
        ceros++
    }
}

console.log(`positivos = ${positivos}, negativos = ${negativos}, ceros = ${ceros},`) 

//================== 7 ================


let random = Math.floor((Math.random() * 100) + 1)
let intentos = 0
let numerito   

while (intentos <= 5 && numerito != random) { 
    if (intentos === 0) {
    numerito = prompt(` INTENTO Nº ${intentos + 1} \n Inserta un numero`)
    intentos ++
    } else {
    if (numerito < random) {
        numerito = prompt(`INTENTO Nº ${intentos + 1} \n El numero es mayor`)
    } else if (numerito > random) {
        numerito = prompt(`INTENTO Nº ${intentos + 1} \n El numero es menor`)
    }
    intentos++
    if (intentos > 5 && numerito != random) {
        alert(`mal asunto`)
    } 
}
}
if (numerito == random) {
    alert(`tu poya ahi lo has hecho en el ${intentos} intento`)
} 