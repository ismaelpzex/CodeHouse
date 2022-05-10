//! cazamos el formulario
const form = document.querySelector('.main-form')
//! cazamos los input
const inputNombre = document.querySelector('#nombre')
const inputApellido = document.querySelector('#apellidos')

//! CAZAMOS LOS CHECKBOX DEL HTML

const leer = document.querySelector('#leer')
const escribir = document.querySelector('#escribir')
const pasear = document.querySelector('#pasear')

//! CAZAMOS LOS RADIOS DEL HTML
const male = document.querySelector('#male')
const female = document.querySelector('#female')

//! CAZAMOS EL SELECT DEL HTML
const lenguaje = document.querySelector('#lenguaje')




//añadimos un escuchador del evento submit DEL FORMULARIO
// vamos tambien a usar el objeto evento para evitar el comportamiento por defecto
const handlesubmit = (event) => {
    event.preventDefault()
    //! cazamos el VALOR de los INPUT del formulario al hacer submit (propiedad .value)
    // al cazar los input, el objeto tiene la propiedad value. Objeto.value = a lo que escribe el usuario en el input
    const nombre = inputNombre.value
    const apellidos = inputApellido.value
    console.log(`nombre: ${nombre}`, `apellidos: ${apellidos}`)

    //! CAZAR EL VALOR DE LOS CHECKBOX (propiedad .checked)
    const readValue = leer.checked
    const writeValue = escribir.checked
    const walkValue = pasear.checked
    console.log(`leer -> ${readValue}`, `Escribir -> ${writeValue}`, `Pasear -> ${walkValue}`)

    //! CAZAR EL VALOR DE LOS RADIOS (propiedad .checked)
    const maleValue = male.checked
    const femaleValue = female.checked

    console.log(`Hombre -> ${maleValue}`,`Mujer -> ${femaleValue}`)

    //! CAZAMOS EL SELECT (propiedad .value)
    // SOLO TENEMOS QUE PREGUNTAR POR SU VALUE
    const lenguajeSelect = lenguaje.value
    console.log(lenguajeSelect)
}

form.addEventListener('submit', handlesubmit)


//! EVENTOS TIPICOS EN UN FORMULARIO

// escuchamos cada entrada que se produce en el input, vale para cualquier otra cosa, solo lo probamos en input.

inputNombre.addEventListener('input', () => {
    console.log(inputNombre.value)
})

//? para un input tipo texto, se utiliza el keypress por si queremos jugar con que tecla ha apretado

inputNombre.addEventListener('keypress', () => {
    console.log(inputNombre.value)
})

// escuchamos cada cambio que hay en un input, vale para cualquier otra cosa, solo lo probamos en input.

inputApellido.addEventListener('change', () => {
    console.log(inputApellido.value)
})

leer.addEventListener('change', () => {
    console.log('ha abido un cambio')
})

//! Para inputs, utilizamos keypress, para los checkbox, radios y selects utilizamos los change, los ejemplos de arriba solo son ejemplos de como utilizarlos.


// PARA NO TENER QUE CAZAR TODOS LOS COMPONENTES DEL FORMULARIO, LE PONEMOS LA PROPIEDAD name="" a todos los inputs del html y segumos en main2.js