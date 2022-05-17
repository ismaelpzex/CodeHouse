// miniBDD
import { nanoid } from '../node_modules/nanoid/nanoid.js'

let allMovies = [
    {
        id: nanoid(),
        title: 'El señor de los Anillos',
        genre: 'Aventuras',
        isSeen: 'true'
    },
    {
        id: nanoid(),
        title: 'Stars Wars',
        genre: 'Ficción',
        isSeen: 'false'
    },
    {
        id: nanoid(),
        title: 'Star trek',
        genre: 'Ficción',
        isSeen: 'false'
    }
]

const form = document.querySelector('form')

const updateMovie = (id, title, genre) => {
    allMovies = allMovies.map((movie) => {
        if (id === movie.id) {
            return { ...movie, title: title, genre: genre }
        }
        return movie
    })
    displayMovies(allMovies)
}

const editMovieInfo = (movie) => {
    const modal = document.createElement('div')
    modal.className = 'modal fade'
    modal.setAttribute('tabindex', '-1')
    modal.innerHTML = `<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header text-center text-bg-primary p-3">
      <h5 class="modal-title">Modo edición</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body bg-black">
      <input class="form-control mb-3 " type="text" placeholder="Pelicula..." id="inputMovie" value="${movie.title}">
      <select class="form-select" name="gender" id="genre">
        <option value="">Género...</option>
        <option ${movie.genre === 'Acción' ? 'selected' : ''}value="Acción">Acción</option>
        <option ${movie.genre === 'Aventuras' ? 'selected' : ''}value="Aventuras">Aventuras</option>
        <option ${movie.genre === 'Ficción' ? 'selected' : ''}value="Ficción">Ficción</option>
        <option ${movie.genre === 'Comedia' ? 'selected' : ''}value="Comedia">Comedia</option>
        <option ${movie.genre === 'Documental' ? 'selected' : ''}value="Documental">documental</option>
        <option ${movie.genre === 'Drama' ? 'selected' : ''}value="Drama">Drama</option>
        <option ${movie.genre === 'Fantasía' ? 'selected' : ''}value="Fantasía">Fantasía</option>
        <option ${movie.genre === 'Musical' ? 'selected' : ''}value="Musical">Musical</option>
        <option ${movie.genre === 'Suspense' ? 'selected' : ''}value="Suspense">Suspense</option>
        <option ${movie.genre === 'Terror' ? 'selected' : ''}value="Terror">Terror</option>
      </select>
    </div>
    <div class="modal-footer bg-primary">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      <button id="btnEdit" type="button" class="btn btn-success">Save changes</button>
    </div>
  </div>
</div>`

    //Borramos el modal cuando se ha escondido
    // DOCUMENTACIÓN DE BOOSTRAP PARTE EVENTS
    modal.addEventListener('hidden.bs.modal', () => {
        updateMovie(movie.id, inputMovie.value, genre.value)
    })

    //cazamos el input del modal
    const inputMovie = modal.querySelector('#inputMovie')
    //damos valor al input según el titlulo de la peli
    inputMovie.value = movie.title
    //cazamos el select del modal
    const genre = modal.querySelector('#genre')
    //damos el valor del input segun el genre de la peli
    genre.value = movie.genre

    //hacemos que aparezca el modal con la clase nueva que hemos creado
    const bootstrapModal = new bootstrap.Modal(modal)
    bootstrapModal.show()

    const btnEdit = modal.querySelector('#btnEdit')
    btnEdit.addEventListener('click', () => {
        updateMovie()
        //esconde el modal cuando terminamos
        bootstrapModal.hide()
    })

}


const changeSeenMovie = (id) => {
    allMovies = allMovies.map((movie) => {
        if (id === movie.id) {
            return { ...movie, isSeen: !movie.isSeen }
        } else {
            return movie
        }
    })
    displayMovies(allMovies)
}

const removeMovie = (id) => {
    allMovies = allMovies.filter((movie) => {
        if (id === movie.id) {
            return false
        } else {
            return true
        }
    })
    displayMovies(allMovies)
}


const selectColorForGenre = (genre) => {
    if (genre === 'Aventuras') return 'adventures'
    if (genre === 'Acción') return 'action'
    if (genre === 'Ficción') return 'fiction'
    if (genre === 'Comedia') return 'comedy'
    if (genre === 'Documental') return 'documental'
    if (genre === 'Drama') return 'drama'
    if (genre === 'Fantasía') return 'fantasy'
    if (genre === 'Musical') return 'musical'
    if (genre === 'Suspense') return 'suspense'
    if (genre === 'Terror') return 'primary'
}

const createMovie = (movie) => {
    const article = document.createElement('article')
    article.classList.add('d-flex', 'align-items-center')
    const h2 = document.createElement('h2')
    h2.classList.add('text-secondary', 'fs-6', 'm-0', 'me-auto')
    h2.innerText = movie.title
    const span = document.createElement('span')
    span.classList.add(`badge`, `text-bg-${selectColorForGenre(movie.genre)}`, `ms-2`)
    span.innerText = movie.genre
    h2.append(span)

    article.append(h2)

    const btnUpdate = document.createElement('i')
    btnUpdate.classList.add('bi', 'bi-pencil', 'icon', 'fs-4', 'text-secondary', 'me-3')
    article.append(btnUpdate)
    btnUpdate.addEventListener('click', () => {
        editMovieInfo(movie)
    })

    const btnStatus = document.createElement('i')
    btnStatus.classList.add('bi', 'icon', 'fs-4', 'text-secondary', 'me-3')
    btnStatus.classList.add(movie.isSeen ? 'bi-eye' : 'bi-eye-slash')
    article.append(btnStatus)
    btnStatus.addEventListener('click', () => {
        changeSeenMovie(movie.id)

    })

    const btnDelete = document.createElement('i')
    btnDelete.classList.add('bi', 'bi-trash', 'icon', 'fs-4', 'text-danger')
    btnDelete.setAttribute('id', 'delete')
    article.append(btnDelete)
    btnDelete.addEventListener('click', () => {
        removeMovie(movie.id)
    })

    return article
}

const displayMovies = (array) => {
    const box = document.querySelector('#movie-list')
    box.innerHTML = ''
    array.forEach((movie) => {
        const article = createMovie(movie)
        box.append(article)
    })
}

const newMovie = () => {
    const movie = {
        id: nanoid(),
        title: form.inputMovie.value,
        genre: form.genre.value,
        isSeen: form.seen.checked
    }
    return movie
}

const validation = () => {
    if (form.inputMovie.value.trim() === '') {
        const errorMovie = document.querySelector('#errorMovie')
        errorMovie.classList.remove('d-none')
        form.inputMovie.classList.add('errorMovie', 'd-block')
        return false
    } else {
        errorMovie.classList.remove('d-block')
        form.inputMovie.classList.remove('errorMovie')
        errorMovie.classList.add('d-none')
    }

    if (form.genre.value.trim() === '') {
        const errorGenre = document.querySelector('#errorGenre')
        errorGenre.classList.remove('d-none')
        form.genre.classList.add('errorMovie')
        errorGenre.classList.add('d-block')
        return false
    } else {
        form.genre.classList.remove('errorMovie')
        errorGenre.classList.remove('d-block')
        errorGenre.classList.add('d-none')
    }
    return true
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (validation() === false) return
    const movie = newMovie()
    allMovies = [...allMovies, movie]
    displayMovies(allMovies)
})

displayMovies(allMovies)