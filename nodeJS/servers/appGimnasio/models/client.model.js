const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    });
};

const getByAge = (age) => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes where edad >= ?', [age], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes where id = ?', [id], (err, result) => {
            if (err) return reject(err);
            resolve((result.lenth === 0) ? null : result[0]);
        })
    })
}

const getByRangeAge = (min, max) => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes where edad >= ? and edad <= ?', [min, max], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

const create = ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into clientes ( nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni ) values (?, ?, ?, ?, ? ,?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

const executeQuery = () => {

}

module.exports = { getAll, getByAge, getByRangeAge, create, getById }