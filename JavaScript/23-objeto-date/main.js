//! OBJETO DATE
// TIENE UN OBJETO ESTATICO, PARA DARTE UNA FECHA EN MILISEGUNDOS QUE HAN PASADO DESDE EL 1 DE ENERO DE 1970 (FECHA DE LA CREACCIÓN DE UNIX)

const msActuales = Date.now()
console.log(msActuales)

// SI INSTANCIAMOS UN NUEVO OBJETO DE TIPO DATE, OBTENEMOS UN OBJETO QUE TIENE MUCHA INFORMACIÓN

const fechaActual = new Date
console.log(fechaActual) // AUNQUE EN CONSOLA VEAMOS UN STRING, ES UN OBJETO DE TIPO DATE CON UN MONTÓN DE METODOS PARA TRABAJAR CON FECHAS

const miNacimiento = new Date(1990, 5, 19, 7, 56, 12) // LOS MESES EMPIEZAN POR 0, 0 = Enero, 1 = FEBRERO...
console.log(miNacimiento)
const navidad = new Date('dec 25 2022 22:22:22')
console.log(navidad)

//! METODOS PARA OBTENER DATOS DE LAS FECHAS

//.getFullYear() te devuelve el año (OPTIMO PARA TRABJAR EN MS)

console.log(miNacimiento.getFullYear())

//.getMonth() te devuelve el MES (OPTIMO PARA TRABJAR EN MS) OJO QUE ENERO EMPIEZA EN LA POSICIÓN 0, tenemos que sumarle 1 para obtener el REAL

console.log(miNacimiento.getMonth() + 1)

//.getDay() te devuelve el DIA DE LA SEMANA, LOS DIAS DE LA SEMANA EMPIEZAN EN 0 Y A DEMÁS LA SEMANA EMPIEZA EN DOMINGO, DOMINGO 0 LUNES 1 MARTES 2 ...

console.log(miNacimiento.getDay() + 1)

//.getDate() te devuelve EL DIA DEL MES (OPTIMO PARA TRABJAR EN MS) EMPIEZA POR 1

console.log(miNacimiento.getDate())

//.getHours // TE DEVUELVE LA HORA

console.log(miNacimiento.getHours())

//.getMinutes // TE DEVUELVE LOS MINUTOS

console.log(miNacimiento.getMinutes())

//.getSeconds // TE DEVUELVE LOS SEGUNDOS

console.log(miNacimiento.getSeconds())

//.getMilliseconds // TE DEVUELVE LOS MILISEGUNDOS

console.log(miNacimiento.getMilliseconds())

//! CONVERTIR A MILISEGUNDOS

const nacimientoMilisegundos = miNacimiento.getTime()
console.log(nacimientoMilisegundos)

//! UTILIZAMOS LOS METODOS CON UTC PARA OBTENER LA HORA QUE FUE EN LONDES
console.log(miNacimiento.getUTCHours())



//! METODOS PARA CAMBIAR LOS DATOS DE LAS FECHAS
console.log(navidad)

//.setFullYear Cambiamos el año
navidad.setFullYear(2035)
console.log(navidad)
//? ASÍ CON TODOS LO METODOS


//! EXTRA, .toLocaleString() PODEMOS MOSTRAR EN PANTALLA UN STRING CON LA FECHA ACTUAL DE UNA FORMA "COOL"

console.log(navidad.toLocaleString('JP'))

//! EXTRA 2, PODEMOS PASARLE UN SEGUNDO PARAMETRO CON UN OBJETO DE CONFIGURACIÓN

const options = {
    dateStyle: 'medium', // long, medium, short
    timeStyle: 'short', // long, medium, short
    weekDay: 'short', // long, medium, short
}
console.log(navidad.toLocaleString('es', options))


