//================== 1 ================
for (let i = 0; i <= 30; i +=3) {
    console.log(i)
}
console.log('======== FIN DEL EJERCICIO =========')

//================== 2 ================

for (let i = 0; i <= 10; i++) {
    let resultado = 8*i
    console.log(`8 X ${i} = ${8*i}`)
}

console.log('======== FIN DEL EJERCICIO =========')

//================== 3 ================

for (let i=1; i<=20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es par`)
    } else {
        console.log(`${i} es impar`)
    }
}

console.log('======== FIN DEL EJERCICIO =========')

//================== 4 ================

let frase = prompt('Introduce una frase')
let aes = 0

for (let letras of frase) {
    if (letras === 'a' || letras === 'A' || letras === 'á' || letras === 'Á') {
        aes++
    }
}
console.log(`tu frase tiene ${aes} aes`)

console.log('======== FIN DEL EJERCICIO =========')

//================== 5 ================

for (let i = 1; i<=50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if ( i % 3 === 0) {
        console.log('Fizz')
    } else if ( i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

console.log('======== FIN DEL EJERCICIO =========')