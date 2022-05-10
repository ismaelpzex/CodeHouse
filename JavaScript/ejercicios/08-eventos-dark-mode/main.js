/* 
* cuando hagamos clic en el boton dark mode:
*   que el color de fondo de la web pase a main-color
*   que los textos sean blancos
*   que el titulo cambie y ponga escrito "¡Te voy a chupar la fuerza!"
*   que cambie la foto a una de darth vader
*   que cambie el atributo alt="" por foto de darth vader
*   que el texto del boton cambie a light mode
*   que el fondo del boton pase a ser blanco
*   que el color del texto pase a ser "main color"
*   cuando le demos click al boton otra vez que vuelva al estado inicial
*/

let darkmode = true
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    const body = document.querySelector('body')
    const titulo = document.querySelector('#title')
    const img = document.querySelector('#photo')
    const btn = document.querySelector('#btn')
    if (darkmode === true) {
        body.classList.add('dark')
        body.classList.add('dark-text')
        titulo.innerHTML = '¡Te voy a chupar la fuerza!'
        img.src = "https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&w=1000&q=80"
        img.alt = "foto de Darth Vader"
        btn.innerHTML = 'Light Mode'
        btn.classList.add('btn-dark')
        btn.classList.remove('btn:hover')
    } else {
        body.classList.remove('dark')
        body.classList.remove('dark-text')
        titulo.innerHTML = '¡Que la fuerza te acompañe!'
        img.src = "https://as01.epimg.net/meristation/imagenes/2021/08/31/noticias/1630409487_516005_1630409560_noticia_normal.jpg"
        img.alt = "imagen de yoda"
        btn.innerHTML = "Dark Mode"
        btn.classList.remove('btn-dark')
    }
    darkmode = !darkmode
})