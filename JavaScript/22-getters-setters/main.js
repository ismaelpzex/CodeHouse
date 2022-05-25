//! GETTERS Y SETTERS

//OBLIGAMOS A QUE DESDE FUERA, LLAMEN A UN METODO PARA QUE NOS DE EL VALOR DE LA PROPIEDAD Y OTRO METODO PARA CAMBIAR EL VALOR DE LA PROPIEDAD

class Book {
    #title
    constructor(title, pages) {
        this.#title = title
        this.pages = pages
    }
    get title() {
        return this.#title
    }
    set title(title) {
        if (title === '' || title.trim() === '' || typeof title !== 'string') return
        this.#title = title
        // Aquí dentro podríamos comprobar que nos metan lo que nosotros queramos, es decir, QUE NO NOS METAN UN NUMERO, O UN BOOLEANO etc..
    }
}

const libro = new Book('El perfume', 150)
console.log(libro.title) // PARECE QUE PEDIMOS LA PROPIEDAD COMO SIEMPRE, PERO POR DETRÁS ESTÁ LLAMANDO AL METODO Y ESTÁ RETORNANDO EL VALOR
libro.title = 'El caminante blanco'
console.log(libro.title)

//! PARECE LO MISMO, PERO DENTRO DE LA CLASE, VALIDAMOS QUE INTRODUZCA EL VALOR CORRECTO

//! NOS ASEGURAMOS, EN ESTE CASO, DE QUE NO NOS PONGAN UN STRING VACÍO O QUE SEA UN STRING