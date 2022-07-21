// Recuperar todos los ficheros y directorios de una carpeta en concreto.
const fs = require('fs');
const fsPromises = require('fs/promises');

// 1 - versión sincrona.
const files = fs.readdirSync('../primeraPrueba');
console.log('SYNC', files);

// 2 - versión asincrona.
fs.readdir('../primeraPrueba', (err, files) => {
    console.log(err);
    console.log('ASYNC', files);
});

// 3 - version promesas.
fsPromises.readdir('../primeraPrueba', files)
    .then(response => console.log('Promise', response))
    .catch(error => console.log(error));

// 4 - Async await
(async () => {
    const filesV2 = await fsPromises.readdir('../primeraPrueba', files);
    console.log('asyncAwait', filesV2);
})();

