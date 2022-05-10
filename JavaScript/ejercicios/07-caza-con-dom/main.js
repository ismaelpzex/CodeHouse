// cazar el h1 y cambiar texto

const title = document.getElementById('title')
title.innerHTML = 'Título de la página desde javascript'

// cojemos el boón y le damos la clase rounded
const button = document.getElementById('button')
button.classList.add('rounded')
//le ponemos un texto al boton
button.innerHTML = "click aquí"
//le damos estilos al boton
button.style.backgroundColor = 'green'
button.style.color = 'white'

//añadimos un atributo datta-id con el valor 12345

button.dataset.id = '12345'

// añadimos atributo title

button.setAttribute('title', 'soy un titulo')
