const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from clientes');
};

const getByPage = (page = 1, limit = 10) => {
    page = parseInt(page);
    limit = parseInt(limit);
    return executeQuery('select * from clientes limit ? offset ?', [limit, (page - 1) * limit])
}

const getInfo = (limit = 10) => {
    return executeQueryOne('select count(*) as total, ceil(count(*)/?) as pages from clientes', [parseInt(limit)]);
}

const getByAge = (age) => {
    return executeQuery('select * from clientes where edad >= ?', [age]);
}

const getById = (id) => {
    return executeQueryOne('select * from clientes where id = ?', [id]);
}

const getByRangeAge = (min, max) => {
    return executeQuery('select * from clientes where edad >= ? and edad <= ?', [min, max]);
}

const create = ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return executeQuery('insert into clientes ( nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni ) values (?, ?, ?, ?, ? ,?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]);
}

const update = (id, { nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return executeQuery('update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, id]);
}

const getByteacherId = (id) => {
    return executeQuery('select * from clientes where profesor_id = ?', [id]);
}

const remove = (id) => {
    return executeQuery('delete from clientes where id = ?', [id]);
}
module.exports = { getAll, getByAge, getByRangeAge, create, getById, update, getByteacherId, remove, getByPage, getInfo };