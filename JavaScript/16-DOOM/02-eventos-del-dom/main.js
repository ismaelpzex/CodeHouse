//eventos del dom
//primero tenemos que cazar el elemento al que queramos escuchar sus eventos
const image = document.querySelector('img')
const button = document.querySelector('button')

//le añadimos un escuchador al elemento y le decimos que evento queremos escucharle
//requiere dos parámetros, tipo de envento y lo que queramos que haga
let contadorDeClicks = 0
const clickEnLaImagen = () => {
    contadorDeClicks++
    console.log(`has hecho click en la imagen ${contadorDeClicks} veces`)
}

image.addEventListener('click', clickEnLaImagen)

button.addEventListener('click', () => {console.log('click en el boton')})
document.body.addEventListener('keypress', () => {console.log('has apretado una tecla')})
document.body.addEventListener('mouseenter', () => { document.body.style.backgroundColor = 'red'})
document.body.addEventListener('mouseleave', () => { document.body.style.backgroundColor = 'white'})

document.body.addEventListener('click', (evento) => {console.log(evento)})


// TODOS LOS EVENTOS, pasan como PIRMER PARAMETRO DE LA FUNCION QUE PONEMOS en el addEventListener un objeto que da MUCHA INFORMACIÓN DEL EVENTO.

image.addEventListener('mouseenter', (evento) => {document.body.style.backgroundColor = "white" 
console.log(evento)})

document.body.addEventListener('click', (evento) => {console.log(evento)
if (evento.target.className === 'titulo' ) {
    alert('has hecho click al título de la web')
}
})

document.body.addEventListener('keypress', (evento) => {console.log(evento.key)})

// TENEMOS UN PAR DE MANERAS MÁS DE CREAR ESCUCHADORES
// DIRECTAMENTE DESDE HTML, PRIMERO CREAMOS LA FUNCION

const clickEnLinea = () => {console.log('has hecho click desde html')}
// después añadimos el listener en el html por ejemplo onclick="clickEnLinea"
// los eventos son iguales que en JS pero con ON delante, onclick, onkeypress... etc
// ahora vamos a capturar la imagen, y vamos a añadirle un listener en el html desde JS

const foto = document.querySelector('.segunda-foto')
console.dir(foto)
foto.onclick = (e) => {console.log('onclick añadido en el html desde javascript', e)}


//! prevenir el comportacimento por defecto de un elemento
// hay elementos que tienen un comportamiento por defecto
// formulario, cuando lo envias recarga la página
// botón derecho abre menú contextual
// cuando pinchas a un link te manda a la web
//? podemos prevenir ese comportamiento utilizando el "event object"

// podemos cazar el formulario de una manera nueva
//? const formulario = document.forms[0] || nos devuelve un array con todos los forumarios
// cazamos el formulario

const formulario = document.querySelector('#form')
console.log(formulario)

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('formulario enviado')
} )