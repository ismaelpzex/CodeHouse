const fs = require('fs');

if (fs.existsSync('./bin')) {
    console.log('el directorio ya existe')
} else {
    fs.mkdir('bin', (err) => {
        if (err) console.log(err);
        else console.log('Directorio creado');
    });
}

