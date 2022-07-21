// recupera el contenido de un fichero.
const fs = require('fs');
const fsPromise = require('fs/promises');

// 1 Syncrona

const content = fs.readFileSync('../primeraPrueba/package.json', 'utf-8');
console.log(content);

// 2 Async
fs.readFile('../primeraPruebA/package.json', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data);
})

//3 Promesa
fsPromise.readFile('../primaraPrueba/package', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err));