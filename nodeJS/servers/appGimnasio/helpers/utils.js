
/**
 * @description Executes an sql statement and returns an array/object with the result
 * @param {*} sql 
 * @param {*} arr 
 * @returns 
 */

const executeQuery = (sql, arr = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, arr, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

/**
 * @description Executes an SQL statement and returns a single element or null if it does not exist
 * @param {*} sql 
 * @param {*} arr
 * @returns 
 */

const executeQueryOne = (sql, arr = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, arr, (err, result) => {
            if (err) reject(err);
            resolve(result.length === 0 ? null : result[0]);
        });
    });
}

module.exports = { executeQuery, executeQueryOne }