const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from profesores', (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

const getNames = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT nombre FROM profesores', (err, result) => {
            if (err) reject(err)
            resolve(result);
        })
    })
}

module.exports = { getAll, getNames }