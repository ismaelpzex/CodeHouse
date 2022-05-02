// ============== 1 =====================

let nota = 5

if (nota === 5) {
    console.log(`Tu nota ha sido un ${nota} HAS APROBADO POR LOS PELOS`)
} else if (nota < 5) {
    console.log(`Tu nota ha sido un ${nota} HAS SUPENDIDO`)
} else if (nota > 5) {
    console.log(`Tu nota ha sido un ${nota} HAS APROBADO`)
}

// ============== 2 =====================

let numero = 68

if (numero < 0) {
    console.log(`el numero ${numero} es negativo`)
} else {
    console.log(`el numero ${numero} es positivo`)
}

if (numero % 2 === 0) {
    console.log(`el numero ${numero} es par`)
} else {
    console.log(`el numero ${numero} es inpar`)
}

if (numero % 5 === 0) {
    console.log(`el numero ${numero} es multiplo de 5`)
} else {
    console.log(`el numero ${numero} no es multiplo de 5`)
}

if (numero > 100) {
    console.log(`el numero ${numero} es mayor que 100`)
} else if (numero < 100) {
    console.log(`el numero ${numero} es menor que 100`)
} else if (numero === 100) {
    console.log(`el numero es ${numero}`)
}





// ============== 3 =====================

let edad = -1
if (edad > 0 && edad < 100 && !isNaN(edad) && edad !== null && edad.trim() !== "") {
    if (edad < 6) {
        console.log(`con ${edad} años entras gratis`)
    } else if (edad >= 6 && edad <= 13) {
        console.log(`con ${edad} años con 4€ la entrada`)
    } else if (edad >= 14 && edad <= 65) {
        console.log(`con ${edad} años con 7€ la entrada`)
    } else if (edad > 65) {
        console.log(`con ${edad} años la entrada es gratuita`)
    }
} else {
    (console.log(`${edad} no es una edad correcta`))
}


// ============== 4 =====================

let dia = "lunes"



    if (dia !== null) {
        switch (dia) {
            case 'lunes': console.log(`hoy es ${dia} hay de todo`)
                break
            case 'martes': console.log(`hoy es ${dia} no hay pescado`)
                break
            case 'miercoles': console.log(`hoy es ${dia} no hay lechuga`)
                break
            case 'jueves': console.log(`hoy es ${dia} no hay tomate`)
                break
            case 'viernes': console.log(`hoy es ${dia} no hay alcachofas`)
                break
            case 'sabado': console.log(`hoy es ${dia} no hay pimientos`)
                break
            case 'domingo': console.log(`hoy es ${dia} no hay arroz`)
                break
            default: {
                console.log(`${dia} no está contemplado como dia de la seman`)
            }
        }
    } else {
        console.log(`Hasta luego HAMIJITO`)
    }



// ============== 5 =====================

let mes = 7

if (mes >= 1 && mes <= 12 && String(mes).trim() !== "" && mes !== isNaN) {
    switch (mes) {
        case 1: console.log(`el mes ${mes} es Enero y tiene 31 Dias`)
            break
        case 2: console.log(`el mes ${mes} es Febrero y tiene 28 Días`)
            break
        case 3: console.log(`el mes ${mes} es Marzo 31 Dias`)
            break
        case 4: console.log(`el mes ${mes} es Abril y tiene 30 Días`)
            break
        case 5: console.log(`el mes ${mes} es Mayo y tiene 31 Dias`)
            break
        case 6: console.log(`el mes ${mes} es Junio y tiene 30 Días`)
            break
        case 7: console.log(`el mes ${mes} es Julio y tiene 31 Dias`)
            break
        case 8: console.log(`el mes ${mes} es Agosto y tiene 31 Dias`)
            break
        case 9: console.log(`el mes ${mes} es Septiembre y tiene 30 Días `)
            break
        case 10: console.log(`el mes ${mes} es Octubre y tiene 31 Dias`)
            break
        case 11: console.log(`el mes ${mes} es Noviembre y tiene 30 Días`)
            break
        case 12: console.log(`el mes ${mes} es Diciembre y tiene 31 Dias`)
            break
    }
} else {
    console.log(`el numero ${mes} de mes no es correcto`)
}

// ============== 6 =====================

let horas = Number(22)
let minutos = Number(22)
let segundos = Number(22)


if (horas <= 23 && horas >= 0 && String(horas).trim() !== "" && minutos <= 59 && minutos >= 0 && String(minutos).trim() !== "" && segundos <= 59 && segundos && String(segundos).trim() !== "") {

    if (segundos === 59 && minutos === 59) {
        segundos = 0
        minutos = 0
        horas++
        if (horas === 24) {
            horas = 0
        }
        console.log(`Son las ${horas} horas ${minutos} minutos ${segundos} segundos`)
    } else if (segundos === 59) {
        minutos++
        segundos = 0

        console.log(`Son las ${horas} horas ${minutos} minutos ${segundos} segundos`)
    } else if (segundos >= 0 || segundos <= 58) {
        segundos++
        console.log(`Son las ${horas} horas ${minutos} minutos ${segundos} segundos`)
    }



    

} else {
    console.log(`introduce una hora correcta`)
}
