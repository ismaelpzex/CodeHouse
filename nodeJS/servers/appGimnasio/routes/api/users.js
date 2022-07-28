const router = require('express').Router();

router.post('/register', async (req, res) => {
    res.json('register funciona');
});

router.post('/login', async (req, res) => {
    res.json('loggin funciona')
});

module.exports = router;