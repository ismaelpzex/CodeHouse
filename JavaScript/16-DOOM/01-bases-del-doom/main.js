// CAZAR ELEMENTOS DEL DOM

// !por si ID
const myTitle = document.getElementById('title')
console.log(myTitle)


//!por su selector CSS
const list = document.querySelectorAll('.list')
console.log(list)
const listItems = document.querySelector('.list-item')
console.log(listItems)

//para coger todos los elementos se utilizaria all
const allItems = document.querySelectorAll('.list-item')
console.log(allItems)

//Info que puedo leer o modificar de un elemento
//!su ID
console.log(myTitle.id)
myTitle.id = 'my-title'
console.log(myTitle.id)

//!su Clase
//directamente viendo todo su string de clases
list.className = 'list text-center'
console.log(list.className)

// a traves de un metodo de todos los elementos, classlist
const especialItem = document.querySelector('.list')
especialItem.classList.add('mt-5') //añadimos una clase
especialItem.classList.remove('list') //borramos la clase
especialItem.classList.replace('mt-5', 'mt-9') //reemplaza una clase por otra
console.log(especialItem.classList.contains('mt-9')) //devuelve true o flase si contiene la clase o no
especialItem.classList.toggle('rounded') // quita o añade una clase comprobando el solo si la tiene o no

//!Su contenido de texto o de otras etiquetas html
console.log(myTitle.innerText)
console.log(myTitle.innerHTML) // NOS VAMOS A QUEDAR CON ESTA porque interpreta etiquetas html
console.log(myTitle.innerText)

myTitle.innerHTML = 'Acabo de cambiar el título <em>De la página web</em>'

listItems.innerHTML = "ELEMENTO DE LA LISTA"

//! sus atributos
const secondList = document.querySelector('.second-list') //cazamos elementos por llamada css
console.log(secondList)
console.log(secondList.getAttribute('title'))
secondList.setAttribute('data-loquesea', 'me llamo lista') //añadimos el atributo data-loquesea y añadimos son contenido.
console.log(secondList.getAttribute('data-loquesea'))
console.log(secondList.dataset) // consultamos el ATRIBUTO DATA EN CONCRETO
console.log(secondList.dataset.id)
secondList.dataset.id = '654321'
console.log(secondList.dataset.id)



//! sus estilos css
const secondTitle = document.getElementById('secondtitle') // cazamos por ID
const secondTitleID = document.querySelector('#secondtitle') // cazamos por ID pero con queryselector
console.log(secondTitle)
console.log(secondTitleID)
secondTitle.style.textAlign = 'center' //le damos un text align center con style
secondTitle.style.color = 'crimson'
secondTitleID.style.backgroundColor = 'gold'
secondTitle.classList.add('text-center') // le añadimos la clase text-center
console.log(secondTitle.getAttribute('class'))


//! CREAR UN ELEMENTO NUEVO EN EL DOM DE FORMA MANUAL
// primer paso, crear una nueva etiqueta html en memoria
const texto = document.createElement('p')

//segundo paso, añadirle clases, id, atributos..
texto.classList.add('color-gold')
texto.id = 'super-parrafo'

//tercer paso, añadirle contenido
texto.innerHTML = 'pongo un super texto para rellenar el super párrafo'

// cuarto paso, añadir el elemento al dom
const caja = document.querySelector('div.caja') //cazamos el div donde queramos meterlo
console.log(caja)

//decidimos en qué lugar de la caja se meterá
caja.append(texto) //al final de la caja
caja.prepend(texto) // antes que nada en la caja
caja.after(texto) // despues de la caja
caja.before(texto) //antes de la caja

//tambien podemos crear un elemento siempre que tengamos a su padre
caja.innerHTML = '<p>Esto es otro párrafo que le meto yo para probar, que me cambia el anterior</p>'
