const router = require('express').Router();

router.use('/products', require('./api/products'))

module.exports = router;