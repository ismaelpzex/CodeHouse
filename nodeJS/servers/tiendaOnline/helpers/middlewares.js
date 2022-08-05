const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs')

const User = require('../models/user.model');

const checkValidationErrors = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.mapped());
    else next();
};

const checkToken = async (req, res, next) => {
    if (!req.headers['authorization']) return res.status(401).json({ error: 'token not found' });
    const token = req.headers['authorization'];
    let payload;
    try {
        payload = jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
        return res.status(401).json({ error: 'incorrect token.' })
    };
    if (payload.expiration < dayjs()) return res.status(401).json({ error: 'token expired' });
    try {
        const user = await User.findById(payload.user_id);
        req.user = user;
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
    next();
}

module.exports = { checkValidationErrors, checkToken };