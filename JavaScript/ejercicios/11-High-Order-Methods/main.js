const peliculas = [
    'El señor de los Anillos',
    'Harry Potter',
    'Matrix',
    'Robocop',
    'Gladiator',
    'Mad Max',
    'Up'
]

// 1 imprimir todas las peliculas en consola
// 1 -> el señor de los anillos
// 2 -> harry potter......

peliculas.forEach((value, index) => {
    console.log(`${index + 1} -> ${value}`)
})

// 2 Nuevo array con peliculas que tengan más de 7 letras

const pelisMasDeSiete = peliculas.filter((value) => { return value.length > 7 })

console.log(pelisMasDeSiete)


// 3 Primera peli que encontremos que tenga 2 palabras

const pelisEspacio = peliculas.find((value) => {
    const arrayPalabras = value.split(' ')
    if (arrayPalabras.length === 2) return true
 })

console.log(pelisEspacio)

// 4 Nuevo array que tenga las mismas peliculas, pero en mayusculas

const pelisMayus = peliculas.map((valor, index) => {
    return valor.toUpperCase()
})

console.log(pelisMayus)

// =========================================== //
const movies = [
    {
      title: 'El Señor de los Anillos',
      gender: ['Aventuras', 'Acción'],
      duration: 250,
      year: 2001,
      director: 'Peter Jackson'
    },
    { 
      title: 'Harry Potter', 
      gender: ['Aventuras', 'Fantasía'], 
      duration: 151, 
      year: 2001 , 
      director: 'Chris Columbus'
    },
    { 
      title: 'Troya', 
      gender: ['Histórica', 'Acción'], 
      duration: 132, 
      year: 2004 , 
      director: 'Wolfgang Petersen'
    },
    { 
      title: 'Iron Man', 
      gender: ['Ciencia Ficción', 'Acción'], 
      duration: 126,
      year: 2008 , 
      director: 'Jon Favreau'
    },
    { 
      title: 'E.T.', 
      gender: ['Aventuras', 'Ciencia Ficción'], 
      duration: 115, 
      year: 1982 , 
      director: 'Steven Spielberg'
    },
    { 
      title: 'Los Goonies', 
      gender: ['Aventuras', 'Comedia'], 
      duration: 114, 
      year: 1985 , 
      director: 'Richard Donner'
    },
    { 
      title: 'Algo Pasa con Mary', 
      gender: ['Comedia', 'Comedia Romántica'], 
      duration: 119, 
      year: 1998 , 
      director: 'Bobby Farrelly'
    },
    { 
      title: 'Hook',
      gender: ['Aventuras', 'Fantasía'], 
      duration: 142, 
      year: 1991 , 
      director: 'Steven Spielberg'
    }
  ]


   //============== 1 ===============

  movies.forEach((value, index)=> {
      console.log(`${index + 1} -> ${value.title}`)
  })

  //============== 2 ===============

  const peliculasModernas = movies.filter((value) => {
    if (value.year > 2000) {
        return value
    }
  })

  console.log(peliculasModernas)

//============== 3 ===============

const peliculasFantasia = movies.filter((value) => {
  return value.gender.includes('Fantasía')
})

console.log(peliculasFantasia)

//OJO AL FILTRO


// ============ 4 ============

const peli = movies.find((value) => {
    if ( value.director === 'Wolfgang Petersen' ) return true
})

console.log(peli)

// ============ 5 ============

//! MUTANDO ARRAY ORIGINAL
const pelisLargas = movies.map((value) => {
    value.duration = value.duration + 100
    return value
})

console.log(pelisLargas)

//! SIN MUTAR ARRAY HACIENDO SPREAD OPERATOR AL DECLARAR NUEVO ARRAY
const pelisLargas2 = [...movies.map((value) => {
    value.duration = value.duration + 100
    return value
})]

console.log(pelisLargas2)

//! SIN MUTAR ARRAY ORIGINAL CREANDO UN NUEVO OBJETO DENTRO DE LA CALLBACK

const pelisLargas3 = movies.map((value) => {
    const newObjet = {...value, duration: value.duration + 100}
    return newObjet
})

console.log(pelisLargas3)

// ============ 6 ============

const pelisRating = movies.map((value) => {
    const newObjet = {... value, rating:  5}
    return newObjet
})

console.log(pelisRating)

// ============ 7 ==============

// VAMOS A INCLUIR A CADA PELI UN RATING DE 5 Y SOLO A LAS DE SPIELBERG 8 

const peliR = movies.map((value) => {
    const newObjet = {...value, rating: 5}
    if ( newObjet.director === 'Steven Spielberg' ) {
        newObjet.rating = 8
    }
    
    return newObjet
})

console.log(peliR)