const vorpal = require('vorpal')();
const chalk = vorpal.chalk;
const camaras = require('./camaras');
vorpal.delimiter('[>]').show();

vorpal.command('test', 'prueba que todo funciona')
    .action((args, callback) => {
        console.log(chalk.red('TO FUNSIONA PIJA'));
        callback();
    });

vorpal.command('registro', 'Tipicas preguntas de registro')
    .action(function (args, callback) {
        this.prompt([
            { type: 'input', message: 'Introduce tu nombre: ', name: 'nombre' },
            { type: 'confirm', message: 'Puedo Compartir Pantalla ', name: 'pantalla' },
            { type: 'list', message: 'Elige tu lenguage de programacion ', name: 'lenguaje', choices: ['Java', 'Javascript', 'otros'] },
            { type: 'password', message: 'password: ', name: 'password' },

        ], function (respuestas) {
            console.log(respuestas);
            callback();
        })
    });

vorpal.command('camaras', 'Recupera una camara aleatoria')
    .action(async function (args, callback) {
        await camaras();
        callback();
    });