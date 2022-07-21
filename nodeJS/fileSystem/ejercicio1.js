const fs = require('fs');
const fsPromises = require('fs/promises');

// mostar por consola el contenido de los ficheros con extensión md
// Crear un directorio llamado 'ficheros' y colocar dentro ficheros de varios tipos
// listar todos los ficheros dentro de la carpeta
// leer todos los ficheros que tengan extension md

// let ficherosMd = []
// fsPromises.readdir('./ficheros')
//     .then(response => ficherosMd = response.filter((value) => {
//         if (value.slice(-3) === '.md') {
//             ficherosMd.push(value);
//         }
//         console.log(value);
//         ficherosMd.forEach((value) => {
//             fsPromises.readFile(`./ficheros/${value}`, 'utf-8')
//                 .then(response => console.log(response))
//                 .catch(error => console.log(error));
//         })
//     }))
//     .catch(err => console.log(err));

// fsPromises.readdir('./ficheros')
//     .then(files => {
//         console.log(files);
//         files.forEach(file => {
//             if (file.endsWith('.md')) {
//                 fsPromises.readFile(`./ficheros/${file}`, 'utf-8')
//                     .then(response => console.log(response))
//                     .catch(err => console.log(err.menssage));
//             }

//         })
//     })
//     .catch(error => console.log(error.menssage));

fsPromises.readdir('./ficheros')
    .then(files => files.filter(file => file.endsWith('.md')))
    .then(filesMd => filesMd.forEach(async file => {
        const data = await fsPromises.readFile(`./ficheros/${file}`, 'utf-8')
        console.log(data);
    }))
    .catch(err => console.log(err.menssage));




