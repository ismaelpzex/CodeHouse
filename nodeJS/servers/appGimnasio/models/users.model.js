const { executeQuery, executeQueryOne } = require('../helpers/utils');

const create = ({ username, email, password }) => {
    return executeQuery('insert into usuarios (username, email, password) values (?, ?, ?)', [username, email, password]);
}

const getByEmail = (email) => {
    return executeQueryOne('select * from usuarios where email = ?', [email]);
}

module.exports = { create, getByEmail };