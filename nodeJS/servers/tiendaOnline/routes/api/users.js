const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { checkToken } = require('../../helpers/middlewares');
const { createToken } = require('../../helpers/utils');
const User = require('../../models/user.model');

router.get('/profile', checkToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('products');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.post('/register', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 11);
    try {
        const response = await User.create(req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (!user) return res.status(401).json({ error: 'Email y/o passowrd not found' });
        if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: 'Email y/o passowrd not found' });
        return res.status(200).json({
            success: 'Login success',
            token: createToken(user)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    };
});


module.exports = router;