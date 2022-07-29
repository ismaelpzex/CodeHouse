const jwt = require('jsonwebtoken');
/**
 * @description Executes an sql statement and returns an array/object with the result
 * @param {*} sql 
 * @param {*} arr 
 * @returns return a array of query
 */

const dayjs = require("dayjs");

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
 * @returns return a first value or null of query.
 */

const executeQueryOne = (sql, arr = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, arr, (err, result) => {
            if (err) reject(err);
            resolve(result.length === 0 ? null : result[0]);
        });
    });
}

/**
 * @description Create token for user.
 * @param {*} user 
 * @return return token
 */

const createToken = (user) => {
    const obj = {
        user_id: user.id,
        exp_date: dayjs().add(5, "minute").unix(),
    }
    return jwt.sign(obj, 'clave para decodificar token',);
}

module.exports = { executeQuery, executeQueryOne, createToken };