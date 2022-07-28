const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { createToken } = require('../../helpers/utils');
const Users = require('../../models/users.model');

router.post(
    '/register',
    body('username')
        .exists()
        .withMessage('Username is required')
        .isLength({ min: 3 }).withMessage('the username field must have a minimum length of 3 characters'),
    body('email')
        .exists()
        .withMessage('Email is required')
        // .isEmail()
        // .withMessage('Email no valid')
        .matches(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .withMessage('Email no coincide con la expresión regular'),
    body('password'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.json(errors.mapped());
        try {
            req.body.password = bcrypt.hashSync(req.body.password, 12);
            const result = await Users.create(req.body);
            res.json(result)
        } catch (err) {
            res.json({ error: err.message });
        }
    });



router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.getByEmail(email);
        if (!user) return res.json({ error: 'Invalid email or password' });
        const equals = bcrypt.compareSync(password, user.password);
        if (!equals) return res.json({ error: 'Invalid email or password' });
        res.json({
            success: 'Login correcto',
            token: createToken(user)
        });
    } catch (err) {
        res.json({ err: err.message });
    }
});

module.exports = router;