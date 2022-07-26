const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('Petición funcionando en /clients');
});

router.get('/new', (req, res, next) => {
    res.send('Petición funcionando en /clients/new');
});

router.post('/create', (req, res, next) => {
    res.send('Petición funcionando en /clients/create');
});

router.get('/edit/:idCliente', (req, res, next) => {
    res.send(`Petición funcionando en /clients/edit/${req.params.idCliente}`);
});

router.post('/update', (req, res, next) => {
    res.send('Petición funcionando en /clients/update');
});

router.get('/delete/:idCliente', (req, res, next) => {
    res.send(`Petición funcionando en /clients/delete/${req.params.idCliente}`);
});
module.exports = router;