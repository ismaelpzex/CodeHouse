const { validationResult } = require('express-validator');

const checkValidationErrors = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.mapped());
    else next();
};

module.exports = { checkValidationErrors };