const button = document.querySelector('.btn')
const padre = document.querySelector('.padre')

//!VIAJAR ENTRE ELEMENTOS
//? usamos siempre la opción element, porque el navegador lee los intros y las identaciones y las toma como hijos "text nodes raros"

console.log(padre.children) // devuelve el array con los hijos que son elementos (ETIQUETAS NO PASA LO DE LOS ESPACIOS)

//! PRIMER HIJO
console.log(padre.firstElementChild)

//! ULTIMO HIJO
console.log(padre.lastElementChild)

//! ENTRE HERMANOS
console.dir(padre.nextElementSibling) // el siguiente hermano
console.log(padre.previousSibling) // el anterior hermano

//! SU PADRE
console.log(padre.parentElement)

//? Se pueden convinar, vamos a viajar hasta el span por ejemplo
console.log(padre.firstElementChild.firstElementChild) // primero nos situamos en el div padre -> me voy al hijo h2 -> me voy al hijo del h2 que es el span

//?ahora lo complico, voy a escuchar el botón, voy a viajar hasta el container, caja .padre, hijo h2 y voy a borrar el span

console.log(button.parentElement.firstElementChild.firstElementChild.firstElementChild)
// ME HE SITUADO EN BOTON
// HE SUBIDO A CONTAINER
// HE IDO A LA CAJA PADRE (HIJO DE CONTAINER)
// HE IDO AL h2 HIJO DE CAJA PADRE
// HE IDO AL span HIJO DE h2

// pongo el botón a la escucha y le digo a la función que borre el span a través del traversing

button.addEventListener('click', () => {
    button.parentElement.firstElementChild.firstElementChild.firstElementChild.remove()
    // ME HE SITUADO EN BOTON
    // HE SUBIDO A CONTAINER
    // HE IDO A LA CAJA PADRE (HIJO DE CONTAINER)
    // HE IDO AL h2 HIJO DE CAJA PADRE
    // HE IDO AL span HIJO DE h2
    // LE DIGO QUE EJECUTE LA FUNCION .remove()
    //? se borra la carita sonriente que es el span
})
