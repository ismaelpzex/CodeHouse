const router = require('express').Router();

const app = require('../app');
const apiClientsRouter = require('./api/clients');
const apiTeachersRouter = require('./api/teachers');
const apiUsersRouter = require('./api/users');

router.use('/clients', apiClientsRouter);
router.use('/teachers', apiTeachersRouter);
router.use('/users', apiUsersRouter);


module.exports = router;