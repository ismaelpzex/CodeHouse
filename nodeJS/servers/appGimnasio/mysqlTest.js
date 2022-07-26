const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'programacion2022',
    port: 3306,
    database: 'gimnasio'
});

const nombre = 'Benito Camela'
connection.connect((err) => {
    console.log(err);
    // connection.query('select * from clientes', (err, result) => {
    //     console.log(result);
    //     connection.destroy();
    // });

    // connection.query(
    //     'insert into profesores (nombre, experiencia, hora_entrada, hora_salida) values (?, ?, ?, ?)',
    //     [nombre, 23, '08:00', '14:30'],
    //     (err, result) => {
    //         console.log(result, err);
    //     });

    connection.query(
        'select c.*, p.nombre as nombre_profesor from clientes c join profesores p on c.profesor_id = p.id where c.id = ?',
        [98],
        (err, result) => {
            console.log(result, err);
        }
    );
});