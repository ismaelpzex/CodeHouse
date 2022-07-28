const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from profesores');
}

const getNames = () => {
    return executeQuery('SELECT nombre FROM profesores');
}

const getById = (id) => {
    return executeQueryOne('select * from profesores where id = ?', [id]);
}

const create = ({ nombre, experiencia, hora_entrada, hora_salida }) => {
    return executeQuery('insert into profesores (nombre, experiencia, hora_entrada, hora_salida) values (?, ?, ?, ?)', [nombre, experiencia, hora_entrada, hora_salida]);
}

module.exports = { getAll, getNames, getById, create }