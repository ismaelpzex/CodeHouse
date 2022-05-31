// Cuando arrojamos un nuevo error, la ejecución sincrona se para, todo lo que haya debajo del try catch no se ejecuta, en este caso el console.log()

function suma (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('NO ES UN NUMERO')
    return a + b
}

try { //PRUEBA A HACER LA FUNCIÓN
    suma(2, 2)
    console.log('la ejecución continua')
} catch (error) {
    console.log(error) // SI NO FUNCIONA, CAZA EL ERROR Y ME LO PRINTAS
} finally {
    console.log('esto siempre se ejecuta funcione o no funcione la funcion')
}

