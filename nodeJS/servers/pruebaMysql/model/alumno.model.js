const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from alumnos', (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = { getAll };