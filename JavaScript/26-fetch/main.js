//! Promesa fetch
//! necesita que por parametro le pasemos la ruta de lo que queremos conseguir
//! el PRIMER .then nos da un objeto de tipo response que nos da INFO de la respuesta (no nos da el texto que andamos buscando)
//! EL SEGUNDO .then NOS VA A DEVOLVER EL TEXTO O LO QUE SEA QUE ESTEMOS BUSCANDO

const boton = document.querySelector('.boton')
const botonUser = document.querySelector('.botonUsuario')
const box = document.querySelector('.outputQuijote')

boton.onclick = () => {
    fetch('./assets/quijote.txt')
        .then((respuesta) => {
            return respuesta.text()
        })
        .then((text) => {
            box.append(text)
        })
        .catch((error) => {
            console.log(error)
        })
}

botonUser.onclick = () => {
    fetch('./usuario.json')
        .then((respuesta) => respuesta.json())
        .then((user) => {
            const boxUser = document.createElement('div')
            boxUser.innerHTML = `<h2>Nombre ${user.usuario}</h2>
            <h3>Email ${user.email}</h3>`
            document.body.append(boxUser)
        })
        .catch((error) => console.log(error))
}

const btnRandom = document.querySelector('.botonRandom')
btnRandom.onclick = () => {
    fetch('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/')
    .then((response) => response.json())
    .then((usuario) => console.log(usuario))
}