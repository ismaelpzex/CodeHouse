//! Promesas
// ¿Qué se puede hacer con una promesa?
//* Crear una promesa
//* Consumir una promesa

// Las promesas, tienen 3 estados principales
//* Pendiente ('pending') -> Todavia no se ha finalizado la promesa
//* Cumplida ('fullfilled') -> Promesa cumplida
//* No cumplida ('rejected') -> no se ha cumplido

//! Creamos una promesa

function irAPortAventura() {
    return new Promise((resolve, reject) => {
        const hemosIdo = true
        if (hemosIdo) resolve('yupiiii') //Calback que le dice a la promesa que se ha cumplido
        else reject('ioputa mas engañao') //Calback que le dice a la promesa que NO se ha cumplido
    })
}


//! Consumir promesa, decidiendo que queremos hacer en cada caso
// el objeto que tiene tipo promesa tiene 3 metodos

//! .then() -> se ejucta cuando la promesa es fullfilled
//! .catch() -> se ejecuta cuando la promesa es rejected
//! .finally() -> se ejecuta independientemente del estado de la promesa

irAPortAventura().then((valorResolve) => {
    console.log(valorResolve)
}).catch((valorReject) => {
    console.log(valorReject)
}).finally(() => {
    console.log('siempre me ejecuto')
})