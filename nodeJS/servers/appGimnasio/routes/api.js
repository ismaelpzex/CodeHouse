const router = require('express').Router();

const app = require('../app');
const { checkToken, checkAdmin } = require('../helpers/middlewares');
const apiClientsRouter = require('./api/clients');
const apiTeachersRouter = require('./api/teachers');
const apiUsersRouter = require('./api/users');

// SI PASA A TRAVÉS DEL CHECKTOKEN DISPONGO DEL USUARIO LOGADO EN req.user
router.use('/clients', checkToken, checkAdmin, apiClientsRouter);
router.use('/teachers', checkToken, apiTeachersRouter);
router.use('/users', apiUsersRouter);


module.exports = router;