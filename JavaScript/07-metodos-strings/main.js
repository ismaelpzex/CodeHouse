let texto = 'Qué pasa tronkito'

//! PROPIEDAD .length
// nos dice cuantos caracteres tiene el string
console.log(texto.length)


//! METODO trim()
// nos elimina espacios delante y detrás
console.log(texto.trim()) 

//! METODO toUpperCase() y toLowerCase()
// nos pasan el texto a mayusculas o a minusculas
console.log(`${texto.toUpperCase()} .toUpperCase()`); // MAYUS
console.log(`${texto.toLocaleLowerCase()} .toLowerCase()`); // minus

//! METODO .indexOf()
// devuelve la posición donde está el texto que hemos puesto en el parentesis
console.log(`${texto.indexOf('k')} es la posición que ocupa la letra K`)

//! METODO .lastIndexOf()
// devuelve la ultima posición donde está el texto que hemos puesto en el parentesis
console.log(`${texto.lastIndexOf('a')} es la ultima posición que ocupa la letra a`)

//! METODO .includes()
// Devuelve true o flase dependiendo si el texto que buscas está en el string
console.log(`${texto.includes('tronkito')} <- ¿incluye la palabra tronkito?`)

//! METODO .slice(donde empieza, y donde acaba)
// corta un trozo de texto desde una posicion inicial hasta una final (la final es opcional)
console.log(`${texto.slice(9, 17)} <- estramos del string de la posición 9 a la 17`)
console.log(`${texto.slice(9)} <- estramos del string de la posición 9 SIN PASAR PARAMETRO DE DONDE ACABA`)

//! METODO .split()
// nos convierte un string en un array, dentro del parentesis le decimos la separación que tiene que tomar como referencia
let textoSplit = texto.split(' ')
console.log(textoSplit)
