const router = require('express').Router();

router.get('/view', (req, res) => {
    res.end('petición get ruta /clientes/view');
});

module.exports = router;