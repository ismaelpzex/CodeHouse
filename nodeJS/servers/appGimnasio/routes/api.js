const router = require('express').Router();

const app = require('../app');
const apiClientsRouter = require('./api/clients');
const apiTeachersRouter = require('./api/teachers');

router.use('/clients', apiClientsRouter);
router.use('/teachers', apiTeachersRouter);

module.exports = router;