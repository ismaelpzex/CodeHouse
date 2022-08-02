const router = require('express').Router();
const dayjs = require('dayjs');
require('dayjs/locale/es');
dayjs.locale('es');

const Clients = require('../models/client.model');

router.get('/', async (req, res, next) => {
    try {
        const clientes = await Clients.getAll();
        clientes.forEach(value => {
            value.fecha_inscripcion = dayjs(value.fecha_inscripcion).format('DD MMM YYYY');
            value.fecha_nacimiento = dayjs(value.fecha_nacimiento).format('DD MMM YYYY')
        });
        res.render('clients/index', {
            clientes,
        });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/new', (req, res, next) => {
    res.render('clients/form', {

    })
});

router.post('/create', async (req, res, next) => {
    try {
        const response = await Clients.create(req.body);
        res.redirect('/clients');
    } catch (err) {
        console.log(err.message);
    }

});

router.get('/edit/:idCliente', async (req, res, next) => {
    const { idCliente } = req.params;
    try {
        const client = await Clients.getById(idCliente);
        res.render('clients/form-update', {
            client
        });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/delete', (req, res, next) => {
    res.send('borra cliente')
});

router.get('/:idCliente', async (req, res, next) => {
    try {
        const id = req.params.idCliente
        const cliente = await Clients.getById(id);
        cliente.fecha_nacimiento = dayjs(cliente.fecha_nacimiento).format('DD MMMM YYYY');
        res.render('clients/view', {
            cliente
        });
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/update', async (req, res, next) => {

})

module.exports = router;