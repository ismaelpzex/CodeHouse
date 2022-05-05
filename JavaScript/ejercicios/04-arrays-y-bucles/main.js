//====================== 1 ===================
/* let numero = prompt('introduce un numero Mayor 1')
if (numero <= 1) {
    console.error(`Te he dicho que mayor a 1 SUBRNORMAL`)
} else {
    let esPrimo = true
    for (let i = 2; i < numero && esPrimo; i++) {
        if (numero % i === 0) {
            esPrimo = false
        }
    }
    if (esPrimo === true) {
        console.log(`${numero} es primo`)
    }else{
        console.log(`${numero} NO es primo`)
    }
} */

//====================== 2 ===================

/* const numeros = [8, 97, 36, -45, 51, 67, 78, 82, -9]
const pares = []
const impares = []
const aleatorio = Math.ceil(Math.random() * 10)

for (i of numeros) {
    if ((i * aleatorio) % 2 === 0) {
        pares.push(i * aleatorio)
        console.log(`Multiplicaciones PARES -> ${i} X ${aleatorio}`)
    } else {
        impares.push(i * aleatorio)
        console.log(`Multiplicaciones IMPARES -> ${i} X ${aleatorio}`)
    }
}
console.log(`pares = ${pares}
imapres = ${impares}`) */

//====================== 3 ===================

/* const array = []
let suma = 0
for (let i = 0; i < 5; i++) {
    let numero = Number(prompt(`numero ${i + 1} introduce un numero`))
    array.push(numero)
}
console.log(array)
for (let i of array) {
    suma += i
}
console.log(`la suma de todos los numeros del array es ${suma}`)
console.log(`la raiz de ${suma} es ${Math.sqrt(suma)}`)
console.log(`la raiz de ${suma} redondeada al alza es ${Math.ceil(Math.sqrt(suma))}`) */

//====================== 4 ===================

/* const array = []

for (let i = 0; i < 10; i++){
    let numero = Math.floor(Math.random() * (22-34) + 22)
    array.push(numero)
}
console.log(array)
for (i in array){
    console.log(array[i])
    if (array[i] % 2 !== 0) {
        array.splice(i, 1, "los impares molan")
    }
}
console.log(array) */

//====================== 5 ===================

const frase = prompt('introduce una frase')
const array = frase.split('')
console.log(array)

for (let i in array) {
    if (array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u' ) {
        array.splice(i, 1, "")
    }
}
console.log(array)
const nuevaFrase = array.join("")
console.log(nuevaFrase)
